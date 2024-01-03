"use client";
import { createContext, useContext } from "react";

import { useExtra } from "@/hooks/useExtra";
import { ExtraHookType } from "@/interfaces/extra.interface";
import { useCar } from "@/hooks/useCar";

export const ExtraContext = createContext({} as ExtraHookType);

interface Props {
  children: React.ReactNode;
}

export const ExtraProvider: React.FC<Props> = ({ children }) => {
  const extra = useExtra();
  // const carExtra = useCar()
  // console.log("extra",carExtra)

  return (
    <ExtraContext.Provider value={extra}>{children}</ExtraContext.Provider>
  );
};

export const useExtraContext = () => useContext(ExtraContext);
