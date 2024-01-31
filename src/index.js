import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextApi from "./components/store/ContextApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextApi>
    <App />
  </ContextApi>
);
