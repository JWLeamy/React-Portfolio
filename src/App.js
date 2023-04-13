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
      <main>
      <Button />
      <Header />
      <Aboutme />
      <Section />
      </main>
    </div>
  );
}

export default App;
