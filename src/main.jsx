import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import "./index.css";
import About from "./About.jsx";
import Connect from "./Connect.jsx";
import Test from "./test/Test.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<Home className="non-selectable" />} />
        <Route path="/projects" element={<Projects className="non-selectable" />} />
        <Route path="/about" element={<About className="non-selectable" />} />
        <Route path="/connect" element={<Connect className="non-selectable" />} />
        <Route path="/test" element={<Test className="non-selectable" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
