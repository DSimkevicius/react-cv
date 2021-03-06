import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import "./App.css";
import React, { Component } from "react";

function App() {
  return (
    <div className="wrap-content">
      <div className="container">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
