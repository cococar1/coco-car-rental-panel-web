import { gql } from "@apollo/client";

export const CREATE_CONTACT = gql`
  mutation CREATE_CONTACT($data: CreateContactInput!) {
    createContact(createContactInput: $data) {
      content
      email
      subject
      createdAt
    }
  }
`;

export const DELETE_CONTACT = gql`
  mutation DELETE_CONTACT($id: ID!) {
    removeContact(id: $id) {
      _id
      content
      createdAt
      email
      subject
    }
  }
`;
