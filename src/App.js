import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import Home from "./components/home.component";
import Register from "./components/register.component";

function App() {
  return (
    <Router>
      <p>ypxs</p>

      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        {/* 
      <Route path="/" exact component={}/>
      <Route path="/" exact component={}/>
 */}
      </div>
    </Router>
  );
}

export default App;
