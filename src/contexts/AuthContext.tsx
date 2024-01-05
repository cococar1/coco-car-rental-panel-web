"use client";
import { createContext, useContext } from "react";
import { ApolloError, MutationResult } from "@apollo/client";

import { CreateUserInput, UserResponse, useAuth } from "@/hooks/useAuth";
import { MutationCompleteType } from "@/interfaces/base.interface";
import { ResponseUser } from "@/interfaces/user.interface";

export interface Authentication {
  logout: () => void;
  // changePassword: (
  //   password: string,
  //   newPassword: string,
  //   onSuccess?: MutationCompleteType<ResponseUser>
  // ) => void;
  // changePasswordRes: MutationResult<Record<"changePassword", ResponseUser>>;
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
