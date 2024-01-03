"use client";

import {
  AuthContext,
  AuthProvider,
  Authentication,
} from "@/contexts/AuthContext";
import { CarsProvider } from "@/contexts/CarContext";
import { ExtraProvider } from "@/contexts/ExtraContext";
import { ThemeProvider } from "styled-components";
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <ThemeProvider theme={{}}>
        <AuthProvider>
          <ExtraProvider>
            <CarsProvider>{children}</CarsProvider>
          </ExtraProvider>
        </AuthProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}
