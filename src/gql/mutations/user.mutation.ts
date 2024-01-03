import { gql } from '@apollo/client'

export const UPDATE_USER = gql`
  mutation UPDATE_USER(
    $id: ID!
    $updateUserInput: UpdateUserInput!
    $file: Upload
  ) {
    updateUser(id: $id, updateUserInput: $updateUserInput, file: $file) {
      _id
      firstName
      lastName
      username
      email
      dateBirth
      lastConected
      photo
      genre
      location
      interest
      isOnline
      verifiedUser
      requestVerified
      regiterCompleted
      persons {
        status
        user {
          _id
          firstName
          lastName
          username
          address {
            street
            country
            city
            postalCode
            long
            lat
          }
          photo
          requestVerified
        }
      }
      favoriteUsers {
        _id
        firstName
        lastName
        username
        address {
          street
          country
          city
          postalCode
          long
          lat
        }
        photo
        requestVerified
      }
      photos {
        _id
        photo
        private
      }
      address {
        street
        country
        city
        postalCode
        long
        lat
      }
    }
  }
`

export const UPDATE_REGISTER = gql`
  mutation UPDATE_REGISTER($id: ID!, $state: Boolean!) {
    updateRegisterCompleted(id: $id, state: $state)
  }
`

export const DELETE_USER = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(id: $id) {
      _id
      firstName
    }
  }
`

export const UPDATE_STATUS_ONLINE = gql`
  mutation UPDATE_STATUS_ONLINE($isActive: Boolean!) {
    updateStateOnline(isActive: $isActive) {
      _id
      firstName
    }
  }
`
