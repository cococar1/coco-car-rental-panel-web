import { gql } from '@apollo/client'

export const SEND_FRIEND_REQUEST = gql`
  mutation SEND_FRIEND_REQUEST($id: ID!) {
    sendFriendRequest(id: $id) {
      _id
      firstName
      lastName
      username
      address {
        country
        street
        city
        province
        long
        lat
      }
      photo
      requestVerified
    }
  }
`

export const REJECT_FRIEND = gql`
  mutation REJECT_FRIEND($id: ID!) {
    rejectFriendRequest(id: $id) {
      _id
      firstName
      lastName
      username
      address {
        country
        street
        city
        province
        long
        lat
      }
      photo
      requestVerified
    }
  }
`

export const REJECT_PERSON = gql`
  mutation REJECT_PERSON($id: ID!) {
    rejectPerson(id: $id) {
      _id
      firstName
      lastName
      username
      email
      dateBirth
      lastConected
      photo
      genre
    }
  }
`

export const ACCEPT_FRIEND = gql`
  mutation ACCEPT_FRIEND($id: ID!) {
    acceptFriendRequest(id: $id) {
      _id
      firstName
      lastName
      username
      requestVerified
      photo
      genre
    }
  }
`

export const CANCEL_FRIEND = gql`
  mutation CANCEL_FRIEND($id: ID!) {
    cancelFriendRequest(id: $id) {
      _id
      firstName
      lastName
      username
      address {
        country
        street
        city
        province
        long
        lat
      }
      photo
      requestVerified
    }
  }
`

export const TOOGLE_FAVORITE_CANDIDATE = gql`
  mutation TOOGLE_FAVORITE_CANDIDATE($id: ID!) {
    toggleFavoriteUser(id: $id) {
      _id
      firstName
      lastName
      username
      address {
        country
        street
        city
        province
        long
        lat
      }
      photo
      requestVerified
    }
  }
`

export const REMOVE_CANDIDATE_FROM_NEW = gql`
  mutation REMOVE_CANDIDATE_FROM_NEW($userId: ID!) {
    changeToOld(userId: $userId)
  }
`
