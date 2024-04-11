import { gql } from "@apollo/client";

export const ALL_CONTACT = gql`
  query ALL_CONTACT {
    contacts {
      content
      subject
      _id
      email
      createdAt
    }
  }
`;
