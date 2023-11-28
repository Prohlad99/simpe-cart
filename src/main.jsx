import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartStore from "./context/CartStore";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartStore>
    <App />
  </CartStore>
);
