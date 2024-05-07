import { gql } from "@apollo/client";

export const CREATE_BOOKING_MANUAL = gql`
  mutation CREATE_BOOKING_MANUAL($data: CreateBookingManualInput!, $file: Upload) {
    createBookingAdminManual(createBookingInputManual: $data, file: $file) {
      _id
      pickupDate
      returnDate
      price
      client {
        fullName
        email
        phoneNumber
        address
        gender
      }
      car {
        licensePlate
        model
        brand
        image
      }
      status
      pickupLocation
      paymentMethod
      image
      paymentId
      paymentLink
    }
  }
`;

// export const CREATE_BOOKING_MANUAL = gql`
//   mutation CREATE_BOOKING_MANUAL($data: CreateBookingManual!) {
//     createBookingAdminManual(createBookingInputManual: $data) {
//       _id
//       pickupDate
//       returnDate
//       price
//       client {
//         fullName
//         email
//         phoneNumber
//         address
//         gender
//       }
//       car {
//         licensePlate
//         model
//         brand
//         image
//       }
//       status
//       pickupLocation
//       paymentMethod
//       image
//       paymentId
//       paymentLink
//     }
//   }
// `;
// export const UPDATE_BOOKING_MANUAL = gql``;

// export const DELETE_BOOKING_MANUAL = gql``;
