import { gql } from "@apollo/client";

export const COUNT_USERS = gql`
  query COUNT_USER {
    countUsers
  }
`;
