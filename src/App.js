import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <Button />
          <Header />
          <Routes>
          <Route path="/" element={<Aboutme />} />
            <Route path="/About" element={<Aboutme />} />
            <Route path="/Works" element={<Section />} />
            <Route path="/Contact" element={<Footer />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
