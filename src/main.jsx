import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import Projects from "./Projects.jsx";
import Home from "./Home.jsx";
import "./index.css";
import About from "./About.jsx";
import Connect from "./Connect.jsx";
import Test from "./Test.jsx";
import ProjectsList from "./pro.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>  
      <Routes>
        
        <Route path="/" index element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/connect" element={<Connect />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/pro" element={<ProjectsList />}/>
        
      </Routes>
    </Router> 
  </React.StrictMode>
);
