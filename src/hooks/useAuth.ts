"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { getCookie, removeCookie, setCookie } from "@/helpers/cookie";
import { AUTH_LOGIN, LOGGED_USER } from "@/gql/auth/auth.query";
import { CHANGE_PASSWORD, CREATE_USER } from "../gql/auth/auth.mutation";
import { useLazyQuery, useMutation } from "@apollo/client";

import { useEffect, useState } from "react";
import { MutationCompleteType } from "@/interfaces/base.interface";
import { ResponseUser, TokenResponse, User } from "@/interfaces/user.interface";
import { signIn, signOut } from "next-auth/react";

export type UserResponse = TokenResponse & {
  user: Omit<User, "password">;
};

export type CreateUserInput = Omit<User, "_id" | "role" | "username">;

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [authLoginFn, authLoginRes] = useLazyQuery(AUTH_LOGIN);
  // const [changePasswordFn, changePasswordRes] =
  //   useMutation<Record<"changePassword", ResponseUser>>(CHANGE_PASSWORD);
  const [createUserFn, createUserRes] = useMutation(CREATE_USER);
  const [getLoggedUserFn, getLoggedUserRes] = useLazyQuery(LOGGED_USER);

  const getAuthData = () => {
    getLoggedUserFn({});
  };

  // const changePassword = (
  //   password: string,
  //   newPassword: string,
  //   onSuccess?: MutationCompleteType<ResponseUser>
  // ) => {
  //   changePasswordFn({
  //     variables: {
  //       password,
  //       newPassword,
  //     },
  //     onCompleted(data) {
  //       if (data) {
  //         toast.success("Contraseña cambiada!");
  //         onSuccess && onSuccess(data.changePassword);
  //       }
  //     },
  //     onError(error) {
  //       const isNotAuthorized =
  //         error.message.includes("Unauthorized") &&
  //         "Contraseña actual incorrecta";
  //       toast.error(
  //         isNotAuthorized || error.message || "Error al cambiar contraseña"
  //       );
  //     },
  //   });
  // };

  const userLogin = async (
    email: string,
    password: string,
    redirectTo?: string
  ) => {
    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });
    console.log("use login 70", responseNextAuth);
    // authLoginFn({
    //   variables: {
    //     email,
    //     password,
    //   },
    //   onCompleted(data) {
    //     if (data) {
    //       const { accessToken, refreshToken, user } =
    //         data.authLogin as UserResponse;

    //       if (accessToken) {
    //         setAuth(accessToken, refreshToken, user.role, redirectTo);
    //       }
    //     }
    //   },
    //   onError() {
    //     toast.error("Error al iniciar sesión");
    //   },
    // });
  };

  const userRegister = (data: CreateUserInput, redirectTo?: string) => {
    createUserFn({
      variables: {
        createUserInput: data,
      },
      onCompleted(data) {
        const { accessToken, refreshToken, user } =
          data.createUser as UserResponse;

        if (data) {
          if (accessToken) {
            setAuth(accessToken, refreshToken, user.role, redirectTo);
          }
        }
      },
      onError(err) {
        toast.error(err.message || "Error al registrarse");
      },
    });
  };

  const logout = async () => {
    removeCookie("access_token");
    removeCookie("refresh_token");
    getLoggedUserFn();
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  const setAuth = (
    accessToken: string,
    refreshToken: string,
    role: string,
    redirectTo?: string
  ) => {
    setCookie("access_token", accessToken);
    setCookie("refresh_token", refreshToken);
    setToken(accessToken);

    getLoggedUserFn();

    setTimeout(() => {
      if (redirectTo) return router.push(redirectTo);

      return router.push("/");
    }, 10);
  };

  useEffect(() => {
    const token = getCookie("access_token");
    if (token) {
      setToken(token);
      getAuthData();
    }
  }, []);

  const refetchUser = () => {
    getLoggedUserFn({
      fetchPolicy: "network-only",
    });
  };

  return {
    logout,
    token,
    // changePassword,
    // changePasswordRes,
    loggedUser: getLoggedUserRes.data?.loggedUser,
    loadingUser: getLoggedUserRes.loading,
    userLogin,
    getAuthData,
    userRegister,
    setAuth,
    refetchUser,
    loginOptions: {
      data: authLoginRes.data?.authLogin as UserResponse,
      loading: authLoginRes.loading,
      error: authLoginRes.error,
    },
    registerOptions: {
      data: createUserRes.data?.createUser as UserResponse,
      loading: createUserRes.loading,
      error: createUserRes.error,
    },
  };
};
