import { gql } from "@apollo/client";

export const ALL_CAR = gql`
  query ALL_CAR {
    cars {
      _id
      name
      image
      countPerson
      typeChange
      minTankQuantity
      maxTankQuantity
      fullType
      subTitle
      description
      price
      createdAt
      updatedAt
      availability
      published
      brand
      model
      pickupTime
    }
  }
`;
