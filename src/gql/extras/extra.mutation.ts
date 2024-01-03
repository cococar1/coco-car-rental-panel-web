import { gql } from "@apollo/client";

export const CREATE_EXTRA = gql`
  mutation CREATE_EXTRA($data: CreateExtraInput!) {
    createExtra(data: $data) {
      _id
      title
      description
      type
      createdAt
      updatedAt
    }
  }
`;
