import { EventChange } from "@/types/general";
import {
  ContainerCardAdditional,
  ContainerCloseCard,
  ContainerContent,
  ContainerTicket,
} from "./cardAdditional.style";
import { useExtraContext } from "@/contexts/ExtraContext";

interface CardAdditionalProps {
  type: string;
  date?: string | Date;
  title: string;
  content: string;
  _id: string;
}

const CardAdditional: React.FC<CardAdditionalProps> = ({
  type,
  date,
  title,
  content,
  _id,
}) => {
  const { deleteExtra } = useExtraContext();
  const deletePromotion = async (e: EventChange | any) => {
    deleteExtra(_id);
  };
  return (
    <ContainerCardAdditional>
      <ContainerCloseCard>
        <button onClick={deletePromotion}>X</button>
      </ContainerCloseCard>
      <ContainerTicket>
        <p>{type}</p>
        <p>{date ? date.toString() : ""}</p>
      </ContainerTicket>
      <ContainerContent>
        <h2>{title}</h2>
        <p>{content?.length > 135 ? content.slice(0, 135) + "..." : content}</p>
      </ContainerContent>
    </ContainerCardAdditional>
  );
};

export default CardAdditional;
