import React from "react";

import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Register from "./components/register.component";
import Login from "./components/login.component";

function App() {
  return (
    <div className="container">
      <Navbar />
      <br />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* 
      <Route path="/" exact component={}/>
      <Route path="/" exact component={}/>
 */}
      </Routes>
    </div>
  );
}

export default App;
