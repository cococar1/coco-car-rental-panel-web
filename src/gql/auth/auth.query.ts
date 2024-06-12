import { gql } from "@apollo/client";

export const AUTH_LOGIN = gql`
  query AUTH_LOGIN($email: String!, $password: String!) {
    authLogin(email: $email, password: $password) {
      user {
        _id
        fullName
        email
      }
      accessToken
      refreshToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  query REFRESH_TOKEN($refresh: String!) {
    refreshToken(refresh: $refresh) {
      accessToken
      refreshToken
    }
  }
`;



export const LOGGED_USER = gql`
  query LOGGED_USER {
    dataWithToken {
      _id
      fullName
      username
      email
      role
      photo
  
    }
  }
`



