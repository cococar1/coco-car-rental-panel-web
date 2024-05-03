import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { Inter } from "@next/font/google";
import { ToastContainer } from "react-toastify";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.styles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import FileInputUI from "@/delete/FileInputUI";
import { Providers } from "@/contexts/Providers";
import { useApollo } from "@/lib/apolloClient";
import { GlobalStyle } from "@/styles/gobal.style";
import { SessionProvider } from "next-auth/react";
interface MyAppProps extends AppProps {
  session?: Session | null;
}
const InterFont = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "500", "700"],
});
export default function App({ Component, pageProps }: MyAppProps) {
  const client = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <SessionProvider >
        <Providers>  
          <GlobalStyle />

          <style jsx global>
            {`
              html {
                font-family: ${InterFont.style.fontFamily};
              }
            `}
          </style>
          {/* <RootLayout> */}
          <Component {...pageProps} />
          <ToastContainer theme="colored" />
          {/* </RootLayout> */}
        </Providers>
      </SessionProvider>
    </ApolloProvider>
  );
}
