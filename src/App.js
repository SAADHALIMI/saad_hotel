import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BarreNavigation from "./components/BarreNavigation";
import Accueil from "./pages/Accueil";
import Chambres from "./pages/Chambres";
import Reservations from "./pages/Reservations";
import Services from "./pages/Services";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard"; 
import Footer from "./components/Footer";
import Confirmation from "./pages/Confirmation";

import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <BarreNavigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/chambres" element={<Chambres />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/services" element={<Services />} />
            
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> 
            <Route path="/login" element={<Login />} /> 
            <Route path="/confirmation" element={<Confirmation />} /> 
            
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
