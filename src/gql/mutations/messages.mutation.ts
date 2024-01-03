import { gql } from '@apollo/client'

export const SEND_MESSAGES_USER = gql`
  mutation SEND_MESSAGES_USER($to: ID!, $content: String, $file: Upload) {
    sendMessage(to: $to, content: $content, file: $file) {
      _id
      content
      sentAt
      status
      type
      from {
        _id
        firstName
        lastName
        username
        photo
        requestVerified
        genre
      }
      to {
        _id
        firstName
        lastName
        username
        photo
        requestVerified
        genre
      }
    }
  }
`
