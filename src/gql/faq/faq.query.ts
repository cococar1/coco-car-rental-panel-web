import { gql } from "@apollo/client";

export const ALL_FAQ = gql`
  query ALL_FAQ {
    faqs {
      _id
      question
      answer
    }
  }
`;
