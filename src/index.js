import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material";
import RequestProvider from "./async/requestContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#880e4f",
      dark: "#5f0937",
      light: "#9f3e72",
    },
    secondary: {
      main: "#3378af",
      dark: "#003c6c",
    },
    bg: {
      main: "#E6B8D3",
      dark: "#E68D99",
    },
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <RequestProvider>
      <App />
    </RequestProvider>
  </ThemeProvider>
);

reportWebVitals();
