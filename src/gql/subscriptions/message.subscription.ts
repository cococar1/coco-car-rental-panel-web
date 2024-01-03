import { gql } from '@apollo/client'

export const MESSAGE_SUBSCRIPTION = gql`
  subscription MESSAGE_SUBSCRIPTION {
    subscriptionMessage {
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
