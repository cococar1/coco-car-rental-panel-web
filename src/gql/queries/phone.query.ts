import { gql } from '@apollo/client'

export const VERIFY_CODE_SMS = gql`
  query VERIFY_CODE_SMS($code: String!, $phone: CreatePhoneInput!) {
    verifyCodeSms(code: $code, phone: $phone)
  }
`

export const SEND_CODE_SMS = gql`
  query SEND_CODE_SMS($code: String!, $number: String!) {
    sendCodeSms(code: $code, number: $number)
  }
`

export const CODE_SMS_LOGIN = gql`
  query CODE_SMS_LOGIN(
    $code: String!
    $phone: CreatePhoneInput!
    $location: LonLatLoginInput!
    $platform: String
  ) {
    verifyCodeSmsLogin(
      code: $code
      phone: $phone
      location: $location
      platform: $platform
    ) {
      refreshToken
      accessToken
      user {
        _id
        firstName
        lastName
        username
        email
        dateBirth
        lastConected
        photo
        genre
        interest
        location
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
  }
`
