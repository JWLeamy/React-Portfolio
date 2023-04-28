import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Button from "./components/Button";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <main>
      <Button />
      <Header />
      <Aboutme />
      <Section />
      <Footer />
      </main>
      
    </div>
  );
}

export default App;
