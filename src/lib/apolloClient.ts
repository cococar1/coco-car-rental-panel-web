import merge from "deepmerge";
import { useMemo } from "react";
import { IncomingMessage } from "http";
import { getCookie, removeCookie, setCookie } from "../helpers/cookie";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";
import { NextApiRequestCookies } from "next/dist/server/api-utils";
import {
  ApolloLink,
  ApolloClient,
  InMemoryCache,
  RequestHandler,
  NormalizedCacheObject,
  Observable,
  FetchResult,
  GraphQLRequest,
  split,
} from "@apollo/client";
import { GraphQLError } from "graphql";

import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { REFRESH_TOKEN } from "@/gql/auth/auth.query";

let apolloClient: any;

const URL_API_HTTP = `${
  process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL
}/graphql`;

const URL_API_WS = `${
  process.env.NEXT_PUBLIC_API_URL_WS ?? process.env.API_URL_WS
}/graphql`;

function isRefreshRequest(operation: GraphQLRequest) {
  return operation.operationName === "refresh_token";
}

// Returns accesstoken if opoeration is not a refresh token request
function returnTokenDependingOnOperation(
  operation: GraphQLRequest,
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
) {
  if (isRefreshRequest(operation)) return getCookie("refresh_token", req) || "";
  else return getCookie("access_token", req) || "";
}

const createApolloClient = (
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
): ApolloClient<NormalizedCacheObject> => {
  const uploadLink: unknown = createUploadLink({ uri: URL_API_HTTP });

  const authLink: ApolloLink = setContext((operation, { headers }) => {
    let extraHeader = {};

    if (typeof window !== "undefined") {
      const token = returnTokenDependingOnOperation(operation);

      if (token) {
        extraHeader = {
          Authorization: `Bearer ${token}`,
        };
      }

      return {
        headers: { ...headers, ...extraHeader },
      };
    } else {
      const token = returnTokenDependingOnOperation(operation, req);

      if (token) {
        extraHeader = {
          Authorization: `Bearer ${token}`,
        };
      }
      return {
        headers: { ...headers, ...extraHeader },
      };
    }
  });

  const errorLink = onError(
    ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (const err of graphQLErrors) {
          if (err.extensions && err.extensions.code) {
            switch (err.extensions.code) {
              case "UNAUTHENTICATED":
                // ignore 401 error for a refresh request
                if (operation.operationName === "refresh_token") return;

                // eslint-disable-next-line no-case-declarations
                const observable = new Observable<
                  FetchResult<Record<string, any>>
                >((observer) => {
                  // used an annonymous function for using an async function
                  (async () => {
                    try {
                      const accessToken = await refreshToken();
                      if (!accessToken) {
                        throw new GraphQLError("Empty AccessToken");
                      }
                      // Retry the failed request
                      const subscriber = {
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                      };

                      forward(operation).subscribe(subscriber);
                    } catch (err) {
                      observer?.error(err);
                    }
                  })();
                });

                return observable;
            }
          }
        }
      }

      // eslint-disable-next-line no-console
      if (networkError) console.error(`[Network error]: ${networkError}`);
    }
  );
  // si elimino esto no puedo subir archivos initial
  const combinedLink = ApolloLink.from([
    errorLink,
    authLink,
    uploadLink as ApolloLink | RequestHandler,
  ]);

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    new GraphQLWsLink(
      createClient({
        url: URL_API_WS,
        connectionParams: {
          authorization: `Bearer ${getCookie("access_token")}`,
        },
      })
    ),

    combinedLink
  );

  ///end
  const headers = {
    Authorization: `Bearer ${
      req ? getCookie("access_token", req) : getCookie("access_token")
    }`,
  };

  const client = new ApolloClient({
    uri: URL_API_HTTP,
    ssrMode: typeof window === "undefined",
    link: splitLink,
    headers,
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  // Request a refresh token to then stores and returns the accessToken.
  const refreshToken = async () => {
    const refreshToken = getCookie("refresh_token");

    if (!refreshToken) {
      throw new GraphQLError("No refresh token");
    }

    try {
      const refreshResolverResponse = await client.query({
        query: REFRESH_TOKEN,
        fetchPolicy: "no-cache",
        variables: {
          refresh: refreshToken,
        },
      });

      const accessToken =
        refreshResolverResponse.data?.refreshToken.accessToken;

      setCookie("access_token", accessToken || "");
      return accessToken;
    } catch (err) {
      removeCookie("access_token");
      removeCookie("refresh_token");
      throw err;
    }
  };

  return client;
};

export function initializeApollo(
  initialState = null,
  req?: IncomingMessage & {
    cookies: NextApiRequestCookies;
  }
) {
  const _apolloClient: ApolloClient<NormalizedCacheObject> | any =
    apolloClient ?? createApolloClient(req);

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) => sourceArray.every((s) => d !== s)),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  if (typeof window === "undefined") return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: null | undefined) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
