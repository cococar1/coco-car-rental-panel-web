import { Extra } from "@/types/Extras.type";
import CardAdditional from "../CardAdditional";
import { ContainerPromotions } from "./style";
import React from "react";

interface WrapperPromotionsProps {
  data: Array<Extra>;
  filterSearch: string;
}

const WrapperPromotions: React.FC<WrapperPromotionsProps> = ({
  data,
  filterSearch,
}) => {
  const hasSearchFilter = Boolean(filterSearch);

  const filteredItems = React.useMemo(() => {
    let filteredPromotion = [...data];

    if (hasSearchFilter) {
      filteredPromotion = filteredPromotion.filter((promotion) =>
        promotion.title.toLowerCase().includes(filterSearch.toLowerCase())
      );
    }

    return filteredPromotion;
  }, [data, filterSearch, hasSearchFilter]);

  return (
    <ContainerPromotions>
      {filteredItems?.map((e, index) => (
        <CardAdditional
          key={index}
          type={e.type}
          date={e.createdAt}
          title={e.title}
          content={e.description}
          _id={e._id}
        />
      ))}
    </ContainerPromotions>
  );
};

export default WrapperPromotions;
