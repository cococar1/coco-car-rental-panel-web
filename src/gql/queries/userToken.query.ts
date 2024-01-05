import { gql } from '@apollo/client'

// export const REFRESH_TOKEN = gql`
//   query REFRESH_TOKEN($refresh: String!, $location: LonLatLoginInput!) {
//     refreshToken(refresh: $refresh, location: $location) {
//       accessToken
//       accessToken
//     }
//   }
// `

// export const GOOGLE_AUTH = gql`
//   query GOOGLE_AUTH(
//     $id_token: String
//     $firstName: String
//     $lastName: String
//     $location: LonLatLoginInput!
//   ) {
//     googleAuth(
//       id_token: $id_token
//       firstName: $firstName
//       lastName: $lastName
//       location: $location
//     ) {
//       user {
//         firstName
//         lastName
//         email
//       }
//       accessToken
//       refreshToken
//     }
//   }
// `

// export const FACEBOOK_AUTH = gql`
//   query FACEBOOK_AUTH($id_token: String, $location: LonLatLoginInput!) {
//     facebookAuth(id_token: $id_token, location: $location) {
//       user {
//         firstName
//         lastName
//         username
//         email
//       }
//       accessToken
//       refreshToken
//     }
//   }
// `

// export const GET_USER_TOKEN = gql`
//   query GET_USER_TOKEN {
//     dataWithToken {
//       _id
//       firstName
//       lastName
//       username
//       email
//       dateBirth
//       lastConected
//       photo
//       genre
//       location
//       isOnline
//       interest
//       verifiedUser
//       requestVerified
//       regiterCompleted
//       relationship {
//         _id
//         name
//       }
//       appearance {
//         bodyType
//         hairColor
//         height
//         weight
//       }

//       persons {
//         status
//         type
//         user {
//           _id
//           firstName
//           lastName
//           username
//           isOnline
//           address {
//             street
//             country
//             city
//             postalCode
//             long
//             lat
//           }
//           photo
//           requestVerified
//         }
//       }
//       favoriteUsers {
//         _id
//         firstName
//         lastName
//         username
//         address {
//           street
//           country
//           city
//           postalCode
//           long
//           lat
//         }
//         photo
//         requestVerified
//       }
//       photos {
//         _id
//         photo
//         private
//       }
//       address {
//         street
//         country
//         city
//         postalCode
//         long
//         lat
//       }
//     }
//   }
// `
