import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Navbar from "./components/navbar";
import "../public/style/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
);
