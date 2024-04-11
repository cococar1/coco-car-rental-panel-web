import { createContext, useContext } from "react";
import { ContactHookType } from "@/types/Contact.type";
import { useContact } from "@/hooks/useContact";

export const ContactContext = createContext({} as ContactHookType);
interface Props {
  children: React.ReactNode;
}

export const ContactProvider: React.FC<Props> = ({ children }) => {
  const contact = useContact();

  return (
    <ContactContext.Provider value={contact}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
