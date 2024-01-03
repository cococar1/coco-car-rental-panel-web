import {
  ContainerCardAdditional,
  ContainerContent,
  ContainerTicket,
} from "./cardAdditional.style";

interface CardAdditionalProps {
  type: string;
  date?: string | Date;
  title: string;
  content: string;
}

const CardAdditional: React.FC<CardAdditionalProps> = ({
  type,
  date,
  title,
  content,
}) => {
  return (
    <ContainerCardAdditional>
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
