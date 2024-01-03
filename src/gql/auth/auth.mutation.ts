import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CREATE_USER($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      accessToken
      refreshToken
      user {
        _id
        firstName
        lastName
        username
        email
        dateBirth
        genre
        school {
          _id
          name
        }
        university {
          _id
          name
        }
        area {
          _id
          name
        }
        career {
          _id
          name
        }
        phoneNumber
        dni
        role
        favoriteCourses {
          _id
          name
          description
          image
        }
        coursesPurchased {
          _id
          name
          description
          image
        }
        allCourses {
          university
          area
        }
        allSimulations {
          university
          area
        }
      }
    }
  }
`

export const CHANGE_PASSWORD = gql`
  mutation CHANGE_PASSWORD($password: String!, $newPassword: String!) {
    changePassword(password: $password, newPassword: $newPassword) {
      accessToken
      refreshToken
      user {
        _id
        firstName
        lastName
        username
        email
        dateBirth
        role
        genre
        simulationsPurchased {
          _id
          name
        }
        allSimulations {
          university
          area
        }
      }
    }
  }
`
