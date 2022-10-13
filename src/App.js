import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhoneCard from "./components/PhoneCard";
import PhoneCardDetail from "./components/PhoneCardDetail";

function App() {
  return (
    
    <div>
        <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/models" element={<PhoneCard/>}/>
        <Route path="/models/id" element={<PhoneCardDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
