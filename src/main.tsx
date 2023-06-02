import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
    <div>Hello World</div>
  </BrowserRouter>
);