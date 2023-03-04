import React from "react";

// Routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
import Home from "../pages/home/index";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
