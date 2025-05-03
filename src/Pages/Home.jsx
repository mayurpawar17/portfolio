import React from "react";

import "../assets/styles/home.css";
import { Button } from "@/components/ui/button";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import About from "../Pages/About";
import Footer from "@/components/Footer";



const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <main>
        <p className="tagline">Design. Develop. Deploy</p>
        <Button variant="ghost" style={{ padding: "0vh 1vw" }} >
           <a href="/about">Know more</a> 
        </Button>
      </main>

      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
};

export default Home;
