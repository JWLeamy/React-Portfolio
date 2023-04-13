import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Aboutme />
      <Section />
    </div>
  );
}

export default App;
