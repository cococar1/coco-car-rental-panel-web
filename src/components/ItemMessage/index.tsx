import { ContactType } from "@/types/Contact.type";
import { ContainerItemMessage } from "./itemMessage.style";
// import { Chip } from "@nextui-org/react";
import { Button as ButtonNextUI } from "@nextui-org/react";
import { useContactContext } from "@/contexts/ContactContext";
import { FormatDate } from "@/helpers/functions";

interface ItemMessageProps {
  contact: ContactType;
  deleteContact: (id: string) => void;
}

const ItemMessage: React.FC<ItemMessageProps> = ({
  contact,
  deleteContact,
}) => {
  // const { deleteContact, getAllContact } = useContactContext();

  // const handleDeleteContact = () => {
  //   deleteContact(contact?._id as string, () => {
  //     getAllContact();
  //   });
  const handleDeleteContact = () => {
    if (contact._id) {
      deleteContact(contact._id);
    }
  };

  return (
    <ContainerItemMessage>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "10px" }}>
          <h2 style={{ fontWeight: "bold" }}>{contact?.subject}</h2>
          <div>
            <span style={{ fontWeight: "bold" }}>Email: </span>
            <span>{contact?.email}</span>
          </div>
        </div>
        <span>{FormatDate(contact?.createdAt as string)}</span>
      </div>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {/* <p>{content.length > 90 ? content.slice(0, 90) : content}</p> */}
        <div style={{ width: "90%" }}>
          <p>{contact?.content}</p>
        </div>
        <div>
          <ButtonNextUI color="danger" onClick={handleDeleteContact}>
            Delete
          </ButtonNextUI>
        </div>
      </div>
    </ContainerItemMessage>
  );
};

export default ItemMessage;
