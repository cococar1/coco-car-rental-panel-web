import { gql } from "@apollo/client";

export const ALL_CAR = gql`
  query ALL_CAR {
    cars {
      _id
      name
      image
      countPerson
      typeChange
      typeChange
      minTankQuantity
      minTankQuantity
      maxTankQuantity
      fullType
      subTitle
      description
      availability
      published
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
