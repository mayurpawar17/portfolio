// import React from "react";
// import Header from "./components/Header";
// import About from "../src/Pages/About";
// import Projects from "../src/Pages/Projects";
// import Skills from "../src/Pages/Skills";
// import "./App.css";
// import Home from "./Pages/Home";
// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Footer />
    </>
  );
}
