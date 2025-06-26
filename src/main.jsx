import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage.jsx";
import Projects from "./Pages/MyProjectsPage.jsx";
import Contact from "./Pages/ContactPage.jsx";
import BioPage from "./Pages/BioPage.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bio" element={<BioPage />} />
    </Routes>
  </BrowserRouter>
);
