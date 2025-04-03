import React from "react";
import Header from "./components/Header";
import About from "../src/Pages/About";
import Projects from "../src/Pages/Projects";
import Skills from "../src/Pages/Skills";
import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
