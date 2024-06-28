"use client";
import { createContext, useContext } from "react";
import { ApolloError } from "@apollo/client";

import { CreateUserInput, UserResponse, useAuth } from "@/hooks/useAuth";

export interface Authentication {
  logout: () => void;
  changePassword: (
    oldPassword: string,
    newPassword: string,
    repeatPassword: string,
    onSuccess?: (data: any) => void
  ) => void;

  userLogin: (email: string, password: string, redirectTo?: string) => void;
  getAuthData: () => void;
  userRegister: (data: CreateUserInput, redirectTo?: string) => void;
  token: string;
  loadingUser: boolean;
  setAuth: (
    token: string,
    refreshToken: string,
    role: string,
    redirectTo?: string
  ) => void;
  loggedUser: any;
  refetchUser: () => void;
  loginOptions: {
    loading: boolean;
    data: UserResponse;
    error?: ApolloError;
  };
  registerOptions: {
    loading: boolean;
    data: UserResponse;
    error?: ApolloError;
  };
}

export const AuthContext = createContext({} as Authentication);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
