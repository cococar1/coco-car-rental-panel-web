"use client";
import { createContext, useContext } from "react";

import { useUser } from "@/hooks/useUser";
import { UserHookType } from "@/interfaces/user.interface";

export const UserContext = createContext({} as UserHookType);

interface Props {
  children: React.ReactNode;
}

export const UserProvider: React.FC<Props> = ({ children }) => {
  const user = useUser();
  // const carUser = useCar()
  // console.log("User",carUser)

  return (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
