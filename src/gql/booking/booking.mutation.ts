import { gql } from "@apollo/client";

export const CREATE_BOOKING_MANUAL = gql`
  mutation CREATE_BOOKING_MANUAL($data: CreateBookingManual!, $file: Upload) {
    createBookingAdminManual(createBookingInputManual: $data, file: $file) {
      _id
      car {
        brand
        licensePlate
        model
      }
      image
      client {
        fullName
        email
        phoneNumber
        address
        gender
      }
    }
  }
`;

// export const UPDATE_BOOKING_MANUAL = gql``;

// export const DELETE_BOOKING_MANUAL = gql``;
