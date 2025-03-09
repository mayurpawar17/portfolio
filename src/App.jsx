import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./Pages/Home";
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
