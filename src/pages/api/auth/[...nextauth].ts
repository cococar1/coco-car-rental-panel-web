import { AUTH_LOGIN } from "@/gql/auth/auth.query";
import { setCookie } from "@/helpers/cookie";
import { initializeApollo } from "@/lib/apolloClient";
import { ApolloClient } from "@apollo/client";
import NextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials: Record<string, string> | undefined) {
        const { email, password } = credentials ?? {};
        const apolloClient: ApolloClient<any> = initializeApollo();

        console.log("credentials");
        try {
          const { data } = await apolloClient.query({
            query: AUTH_LOGIN,
            variables: {
              email,
              password,
            },
          });

          console.log("data", data);

          const { authLogin } = data || {};
          const { user } = authLogin || {};

          if (user) {
            setCookie("access_token", authLogin.accessToken);
            setCookie("refresh_token", authLogin.refreshToken);
            return {
              _id: user._id,
              fullName: user.fullName,
              username: user.username,
              email: user.email,
              photo: user.photo,
              accessToken: authLogin.accessToken,
              refreshToken: authLogin.refreshToken,
            };
          }
        } catch (err) {
          return null;
        }
      },
    } as any),

    // ...add more providers here
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      console.log("next auth api 50", token);
      if (account) {
        token.id_token = account.id_token;
      }
      if (user && account) {
        token.graphqlData = user;
      }
      return token;
    },

    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      console.log("next auth 62 api", session);
      session.token = token.id_token as string;
      session.user = token.graphqlData;
      return session;
    },
  },
};

export default NextAuth(authOptions);
export { authOptions as GET, authOptions as POST };
