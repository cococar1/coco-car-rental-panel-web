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


.rti--container {
  --rti-bg: "#fff",
  --rti-border: "#ccc",
  --rti-main: "#3182ce",
  --rti-radius: "0.375rem",
  --rti-s: "0.5rem", /* spacing */
  --rti-tag: "#edf2f7",
  --rti-tag-remove: "#e53e3e",
}
`;
