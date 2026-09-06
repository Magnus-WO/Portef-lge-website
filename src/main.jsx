import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mine-prosjekter" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
