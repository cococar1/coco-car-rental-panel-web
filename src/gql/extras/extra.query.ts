import { gql } from "@apollo/client";

export const ALL_EXTRA = gql`
  query ALL_EXTRA {
    extras {
      _id
      title
      description
      createdAt
      type
    }
  }
`;

