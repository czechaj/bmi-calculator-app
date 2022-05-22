import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CalculateProvider } from "./contexts/CalculateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CalculateProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CalculateProvider>
  </React.StrictMode>
);
