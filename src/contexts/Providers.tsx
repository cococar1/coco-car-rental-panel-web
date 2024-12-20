"use client";

import {
  AuthContext,
  AuthProvider,
  Authentication,
} from "@/contexts/AuthContext";
import { CarsProvider } from "@/contexts/CarContext";
import { ExtraProvider } from "@/contexts/ExtraContext";
import { ThemeProvider } from "styled-components";
import { NextUIProvider } from "@nextui-org/react";
import { BookingProvider } from "./BookingContext";
import { ContactProvider } from "./ContactContext";
import { UserProvider } from "./UserContext";
import { FaqProvider } from "./FaqContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider theme={{}}>
        <AuthProvider>
          <UserProvider>
            <ExtraProvider>
              <FaqProvider>
                <CarsProvider>
                  <BookingProvider>
                    <ContactProvider>{children}</ContactProvider>
                  </BookingProvider>
                </CarsProvider>
              </FaqProvider>
            </ExtraProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
