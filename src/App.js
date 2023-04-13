import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Button from "./components/Button"

function App() {
  return (
    <div>
      <Navbar />
      <Button />
      <Header />
      <Aboutme />
      <Section />
    </div>
  );
}

export default App;
