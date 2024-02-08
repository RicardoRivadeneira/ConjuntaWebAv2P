import React from "react";
import { createRoot } from "react-dom"; // Importa createRoot en lugar de ReactDOM
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Utiliza createRoot en lugar de ReactDOM.render
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
