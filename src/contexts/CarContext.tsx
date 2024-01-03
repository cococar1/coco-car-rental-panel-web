"use client";
import { createContext, useContext } from "react";

import { CarHookType } from "@/interfaces/car.interface";
import { useCar } from "@/hooks/useCar";

export const CarContext = createContext({} as CarHookType);

interface Props {
  children: React.ReactNode;
}

export const CarsProvider: React.FC<Props> = ({ children }) => {
  const car = useCar();

  return <CarContext.Provider value={car}>{children}</CarContext.Provider>;
};

export const useCarContext = () => useContext(CarContext);
