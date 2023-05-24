import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import ClientsPage from "./pages/Clients";
import ContactsPage from "./pages/Contacts";

// Components
import HeaderComponent from "./components/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
