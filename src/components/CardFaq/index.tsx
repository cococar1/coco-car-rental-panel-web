import { FAQ } from "@/types/faq.type";
import React from "react";
import { ContainerCardFaq, ContainerCloseCard, ContainerContent } from "./style";
import { useFaqContext } from "@/contexts/FaqContext";
import { EventChange } from "@/types/general";

type CardFaqProps = FAQ;
const CardFaq: React.FC<CardFaqProps> = ({ _id, answer, question }) => {
  const { deleteFaq } = useFaqContext();

  const deleteItemFaq = async (e: EventChange | any) => {
    console.log(_id);
    deleteFaq(_id!);
  };

  return (
    <ContainerCardFaq>
      <ContainerCloseCard>
        <button onClick={deleteItemFaq}>X</button>
      </ContainerCloseCard>

      <ContainerContent>
        <h2>{question}</h2>
        <p style={{  wordBreak: "break-word" }}>{answer}</p>
      </ContainerContent>
    </ContainerCardFaq>
  );
};

export default CardFaq;
