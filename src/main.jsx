import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Routing_App from "./POC/Routing_App.jsx";
import { BrowserRouter, createBrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routing_App />
  </BrowserRouter>
);
