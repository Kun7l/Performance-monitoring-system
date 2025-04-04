import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../pages/Register.jsx";
import NotFound from "../pages/NotFound.jsx";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx"
import UploadData from "../pages/UploadData.jsx"
import DashBoard from "../pages/DashBoard.jsx";

export default function AppRoutes() {
    return (
      <Router>
        <Routes> 
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<DashBoard/>}/>
          <Route path="/upload-data" element={<UploadData/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<NotFound/>} />  
        </Routes>
      </Router>
    );
}