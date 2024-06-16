import { gql } from "@apollo/client";

export const CREATE_FAQ = gql`
  mutation CREATE_FAQ($data: CreateFaqInput!) {
    createFaq(data: $data) {
      _id
      question
      answer
    }
  }
`;

export const UPDATE_FAQ = gql`
  mutation UPDATE_FAQ($id: ID!, $data: UpdateFaqInput!) {
    updateFaq(id: $id, data: $data) {
      _id
      question
      answer
    }
  }
`;

export const DELETE_FAQ = gql`
  mutation DELETE_FAQ($id: ID!) {
    removeFaq(id: $id) {
      _id
      question
      answer
    }
  }
`;
