import { FAQ } from "@/types/faq.type";
import React from "react";
import { ContainerCardFaq, ContainerCloseCard } from "./style";
import { useFaqContext } from "@/contexts/FaqContext";
import { EventChange } from "@/types/general";
import { ContainerContent } from "../CardAdditional/cardAdditional.style";

type CardFaqProps = FAQ;
const CardFaq: React.FC<CardFaqProps> = ({ _id, answer, question }) => {
  const { deleteFaq } = useFaqContext();

  const deleteItemFaq = async (e: EventChange | any) => {
    console.log(_id)
    deleteFaq(_id!);
  };

  return (
    <ContainerCardFaq>
      <ContainerCloseCard>
        <button onClick={deleteItemFaq}>X</button>
      </ContainerCloseCard>

      <ContainerContent>
        <h2>{question}</h2>
        <p>{answer.length > 135 ? answer.slice(0, 135) + "..." : answer}</p>
      </ContainerContent>
    </ContainerCardFaq>
  );
};

export default CardFaq;
