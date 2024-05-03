import InputUI from "@/ui/InputUI";
import {
  ContainerAllMessage,
  ContainerResultMessages,
  ItemContainer,
} from "./resultMessages.style";
import SearchIcon from "@/components/assets/svgs/searchIcon";
import { useEffect, useState } from "react";
import SelectInputUI from "@/ui/SelectInputUI";
import ItemMessage from "@/components/ItemMessage";
import { useContactContext } from "@/contexts/ContactContext";
import { ContactType } from "@/types/Contact.type";

interface ResultMessagesProps {}

const ResultMessages: React.FC<ResultMessagesProps> = () => {
  const [search, setSearch] = useState("");

  const [dataContact, setDataContact] = useState<Array<ContactType>>();
  const {
    contactsOptions: { data },
    deleteContact,
  } = useContactContext();

  const handleDeleteContact = (id: string) => {
    deleteContact(id as string, () => {});
  };

  const onChangeSearch = () => {
    const regex = new RegExp(search, "i");
    if (search == "") {
      return setDataContact(data);
    }
    const filteredContacts = dataContact?.filter((contact: ContactType) =>
      regex.test(contact.subject as string)
    );
    setDataContact(filteredContacts);
  };

  useEffect(() => {
    setDataContact(data);
  }, [data]);

  useEffect(() => {
    onChangeSearch();
  }, [search]);

  return (
    <ContainerResultMessages>
      <div style={{ padding: "5px", fontSize: "25px" }}>
        <h2>Mensajes</h2>
      </div>
      <ItemContainer style={{ marginTop: "20px", marginBottom: "10px" }}>
        <InputUI
          SvgIcon={<SearchIcon color="#A098AE"></SearchIcon>}
          type="text"
          backgroundcolor="#ffffff"
          placeholder="Buscar"
          positionIcon={"LEFT"}
          stylesContainer={{
            width: "90%",
            borderRadius: "50px",
            padding: "5px 15px",
            border: "2px solid #A098AE",
          }}
          valueInput={search}
          changeValue={setSearch}
          stylesInput={{
            marginLeft: "20px",
            color: "#0000000",
            width: "100% ",
          }}
          placeholdercolor="#B4B4B4"
        ></InputUI>
      </ItemContainer>
      {/* <ItemContainer style={{ justifyContent: "space-between",marginTop:"10px" }}>
        <span style={{fontSize:"25px"}} >Chat</span>
         <SelectInputUI
          arrayOptions={[{ key: 'Revisado', value: "Revisado" }]}
          placeholder="estatus"
          styleSelect={{
            width: "100px",
            textAlign: "center",
            borderRadius: "50px",
            border: "2px solid #A098AE",
            cursor:"pointer"
          }}
        ></SelectInputUI> 
      </ItemContainer> */}
      <ContainerAllMessage>
        {dataContact?.map((contact, key) => (
          <ItemMessage
            key={key}
            contact={contact}
            deleteContact={handleDeleteContact}
          />
        ))}
      </ContainerAllMessage>
    </ContainerResultMessages>
  );
};

export default ResultMessages;
