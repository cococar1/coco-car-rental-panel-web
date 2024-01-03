"use client";
import { createContext, useContext, useState } from "react";

export const RentalContext = createContext({});

interface Props {
  children: React.ReactNode;
}

export const RentalProvider: React.FC<Props> = ({ children }) => {
  const [message, setMessage] = useState("hello");

  return (
    <RentalContext.Provider value={{ message }}>
      {children}
    </RentalContext.Provider>
  );
};

export const useRentalContext = () => useContext(RentalContext);
