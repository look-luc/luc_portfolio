import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./content/contact";
import Research from "./content/research";
import Resume from "./content/resume";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Research" element={<Research />} />
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
