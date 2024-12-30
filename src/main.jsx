import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import "./index.css";
import About from "./About.jsx";
import Connect from "./Connect.jsx";
import Test from "./test/Test.jsx";

const CursorTrail = () => {
  useEffect(() => {
    const numTrails = 15;
    const trails = [];

    for (let i = 0; i <= numTrails; i++) {
      const trail = document.createElement("div");
      trail.classList.add("cursor-trail");
      trail.style.zIndex = `${99 - i}px`;
      trail.style.width = `${15 - i}px`;
      trail.style.height = `${15 - i}px`;
      trail.style.marginLeft = `${i / 2}px`; // Adjust margin to keep smaller cursors within the biggest cursor
      trail.style.marginTop = `${i / 2}px`; // Adjust margin to keep smaller cursors within the biggest cursor
      trail.style.transitionDelay = `${i * 0.05}s`;
      document.body.appendChild(trail);
      trails.push(trail);
    }

    const moveCursor = (e) => {
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.left = `${e.clientX}px`;
          trail.style.top = `${e.clientY}px`;
        }, index * 50);
      });
    };

    window.addEventListener("mousemove", moveCursor);
    
    const animateTrails = () => {
      trails.forEach((trail, index) => {
        setTimeout(() => {
          trail.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
          trail.style.opacity = 1;
        }, index * 50);
      });
      requestAnimationFrame(animateTrails);
    };

    animateTrails();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      trails.forEach(trail => document.body.removeChild(trail));
    };
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CursorTrail />
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