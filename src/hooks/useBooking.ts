"use client";

import { useEffect } from "react";
import { useMutation, useLazyQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { CREATE_BOOKING_MANUAL } from "@/gql/booking/booking.mutation";
import { ALL_BOOKING } from "@/gql/booking/booking.query";
import { BookingHookType } from "@/interfaces/booking.interface";

export const useBooking = (): BookingHookType => {
  const [createBookingFn, createBookingRes] = useMutation(
    CREATE_BOOKING_MANUAL
  );
  // const [updateBookingFn, updateBookingRes] = useMutation(UPDATE_BOOKING_MANUAL);
  // const [deleteBookingFn, deleteBookingRes] = useMutation(DELETE_BOOKING_MANUAL);

  const [getBookings, getBookingRes] = useLazyQuery(ALL_BOOKING);

  const createBooking = (
    data: any,
    file: File | null,
    onSuccess: (val: any) => void
  ) => {
    createBookingFn({
      variables: {
        data: data,
        file: file ?? null,
      },
      refetchQueries() {
        return [{ query: ALL_BOOKING }];
      },
      onCompleted(data) {
        if (data) {
          toast.success("Reserva creada correctamente", {
            position: "bottom-right",
            style: { zIndex: 500000 },
          });
          onSuccess && onSuccess(data.createBooking);
        }
      },
      onError(error) {
        console.error(error);
        toast.error("Error al crear reserva, verifique todos los campos");
      },
    });
  };

  // const updateBooking = (
  //   id: string,
  //   data: Booking,
  //   file: File | null,
  //   onSuccess: (val: any) => void
  // ) => {
  //   const variables: any = { id, data };
  //   if (file) variables.file = file;
  //   updateBookingFn({
  //     variables,
  //     refetchQueries() {
  //       return [{ query: ALL_CAR }];
  //     },
  //     onCompleted(data) {
  //       if (data) {
  //         toast.success("Auto actualizado correctamente", {
  //           position: "bottom-right",
  //         });
  //         onSuccess && onSuccess(data.updateBooking);
  //       }
  //     },
  //     onError(error) {
  //       console.error(error);
  //       toast.error(error.message || "Error al actualizar un Auto");
  //     },
  //   });
  // };
  // const deleteBooking = (id: string, onSuccess: (val: any) => void) => {
  //   deleteBookingFn({
  //     variables: {
  //       id,
  //     },
  //     refetchQueries() {
  //       return [{ query: ALL_CAR }];
  //     },
  //     onCompleted(data) {
  //       if (data) {
  //         toast.success("Auto eliminado correctamente", {
  //           position: "bottom-right",
  //         });
  //         onSuccess && onSuccess(data.createExtra);
  //       }
  //     },
  //     onError(error) {
  //       toast.error(error.message || "Error al eliminar un Auto");
  //     },
  //   });
  // };

  useEffect(() => {
    if (
      !getBookingRes.data
      // || !getPlansRes.data.plans.length
    ) {
      getBookings();
    }
  }, []);

  return {
    createBooking,
    getBookings,
    // deleteBooking,
    // updateBooking,
    bookingsOptions: {
      data: getBookingRes.data?.bookings,
      loading: getBookingRes.loading,
      error: getBookingRes.error,
    },
    createOptions: {
      data: createBookingRes.data?.createBooking,
      loading: createBookingRes.loading,
      error: createBookingRes.error,
    },
    // updateOptions: {
    //   data: updateBookingRes.data?.updateBooking,
    //   loading: updateBookingRes.loading,
    //   error: updateBookingRes.error,
    // },
    // deleteOptions: {
    //   data: deleteBookingRes.data,
    //   error: deleteBookingRes.error,
    //   loading: deleteBookingRes.loading,
    // },
  };
};
