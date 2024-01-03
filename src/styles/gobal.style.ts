import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  font-family: "DM Sans", sans-serif;
  font-family: "Inter", sans-serif;
  font-family: "Nunito Sans", sans-serif;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
  
}
`;
