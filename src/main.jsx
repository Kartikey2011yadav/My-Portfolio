import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

import App2 from "./App2.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/index2" element={<App2 />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
