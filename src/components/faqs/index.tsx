import { FAQ } from "@/types/faq.type";
import { ContainerWrapperFaq } from "./style";
import React from "react";
import CardFaq from "../CardFaq";

interface WrapperFaqProps {
  data: Array<FAQ>;
  filterSearch: string;
}

const WrapperFaq: React.FC<WrapperFaqProps> = ({ data, filterSearch }) => {
  const hasSearchFilter = Boolean(filterSearch);

  const filteredItems = React.useMemo(() => {
    let filteredQuestion = [...data];

    if (hasSearchFilter) {
      filteredQuestion = filteredQuestion.filter((question) =>
        question.question.toLowerCase().includes(filterSearch.toLowerCase())
      );
    }

    return filteredQuestion;
  }, [data, filterSearch, hasSearchFilter]);

  return (
    <ContainerWrapperFaq>
      {filteredItems?.map((e, index) => (
        <CardFaq
          key={index}
          answer={e.answer}
          question={e.question}
          _id={e._id}
        />
      ))}
    </ContainerWrapperFaq>
  );
};

export default WrapperFaq;
