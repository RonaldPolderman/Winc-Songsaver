import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <nav className="nav">
        <Link to="/" className="navlink">
          Home
        </Link>
        <br />
        <Link to="/About" className="navlink">
          About
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
