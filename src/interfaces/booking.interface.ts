import { Booking } from "@/types/booking";


export interface BookingHookType {
  createBooking: (
    data: any,
    file: File | null,
    onSuccess: (val: any) => void
  ) => void;
//   updateBooking: (
//     id: string,
//     data: any,
//     file: File | null,
//     onSuccess: (val: any) => void
//   ) => void;
//   deleteBooking: (id: any, onSuccess: (val: any) => void) => void;
  getBookings: (options: any) => void;
  bookingsOptions: {
    data: Booking[] | any;
    loading: boolean;
    error: any;
  };
  createOptions: {
    data: Booking[] | any;
    loading: boolean;
    error: any;
  };
//   updateOptions: {
//     data: Booking[] | any;
//     loading: boolean;
//     error: any;
//   };
//   deleteOptions: {
//     data: boolean | any;
//     loading: boolean;
//     error: any;
//   };
}
