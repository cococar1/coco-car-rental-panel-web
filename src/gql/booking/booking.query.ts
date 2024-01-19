import { gql } from "@apollo/client";

export const ALL_BOOKING = gql`
  query ALL_BOOKING {
    bookings {
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
      paymentMethod
      image
      paymentId
      paymentLink
    }
  }
`;
