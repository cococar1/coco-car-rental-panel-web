


"use client";
import { useFaq } from "@/hooks/useFaq";
import { FAQHookType } from "@/interfaces/faq.interface";
import { createContext, useContext } from "react";


export const FaqContext = createContext({} as FAQHookType);

interface Props {
  children: React.ReactNode;
}

export const FaqProvider: React.FC<Props> = ({ children }) => {
  const faq = useFaq();
  // const carFaq = useCar()
  // console.log("Faq",carFaq)

  return (
    <FaqContext.Provider value={faq}>{children}</FaqContext.Provider>
  );
};

export const useFaqContext = () => useContext(FaqContext);
