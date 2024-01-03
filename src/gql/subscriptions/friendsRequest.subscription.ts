import { gql } from '@apollo/client'

export const RESPONSE_FRIEND_REQUEST = gql`
  subscription RESPONSE_FRIEND_REQUEST {
    subscriptionFriendRequest {
      message
      user {
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
