import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {" "}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// Als je de prestaties van je app wilt meten, kun je een functie doorgeven
// om de resultaten te loggen (bijvoorbeeld: reportWebVitals(console.log))
// of stuur ze naar een analytics-endpoint. Leer meer: https://bit.ly/CRA-vitals
reportWebVitals();
