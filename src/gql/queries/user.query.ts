import { gql } from '@apollo/client'

// export const UPDATE_REGISTER = gql`
//   query USER_BY_ID($id: ID!) {
//     userByID(id: $id) {
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
//       persons {
//         status
//         type
//         user {
//           _id
//           firstName
//           lastName
//           username
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

// export const REGISTRATION_PROGRESS = gql`
//   query REGISTRATION_PROGRESS {
//     registrartionProgress {
//       total
//       data {
//         personalInformation
//         interests
//         images
//         location
//         socialNetwork
//       }
//     }
//   }
// `
