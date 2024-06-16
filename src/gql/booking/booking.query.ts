import { gql } from "@apollo/client";

export const ALL_BOOKING = gql`
  query ALL_BOOKING {
    bookings {
      _id
      pickupDate
      returnDate
      pickupLocation
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

export const ANALYSIS_BOOKING = gql`
  {
    analyticsYear {
      bookings
      month
      totalRevenue
    }
  }
`;
