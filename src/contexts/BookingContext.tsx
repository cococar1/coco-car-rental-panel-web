"use client";
import { createContext, useContext } from "react";

import { BookingHookType } from "@/interfaces/booking.interface";
import { useBooking } from "@/hooks/useBooking";

export const BookingContext = createContext({} as BookingHookType);

interface Props {
  children: React.ReactNode;
}

export const BookingProvider: React.FC<Props> = ({ children }) => {
  const booking = useBooking();

  return (
    <BookingContext.Provider value={booking}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
