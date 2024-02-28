import { gql } from "@apollo/client";

export const ALL_CAR = gql`
  query ALL_CAR {
    carsAdmin {
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
      licensePlate
      features
    }
  }
`;
