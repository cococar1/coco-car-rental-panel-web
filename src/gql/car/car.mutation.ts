import { gql } from "@apollo/client";

export const CREATE_CAR = gql`
  mutation CREATE_CAR($data: CreateCarInput!, $file: Upload) {
    createCar(createCarInput: $data, file: $file) {
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

export const TEST = gql`
  mutation TEST($file: Upload) {
    test(file: $file)
  }
`;

export const DELETE_CAR = gql`
  mutation DELETE($id: ID!) {
    removeCar(id: $id)
  }
`;
