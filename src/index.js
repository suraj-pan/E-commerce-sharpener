import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextApi from "./components/store/ContextApi";
import { AuthContextProvider } from "./components/store/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
  <ContextApi>
    <App />
  </ContextApi>
  </AuthContextProvider>
);
