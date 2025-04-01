import React from "react";
import Header from "../components/Header";
import "../assets/styles/home.css";
import { Button } from "@/components/ui/button";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Footer from "@/components/Footer";

// const Home = () => {
//   return (
//     <>
//         {/* <Header/> */}

//         <main>

//         <p className='tagline'>Design. Develop. Deploy</p>
//         <button className='knowMoreBtn'>Know more</button>

//         </main>

//     </>
//   )
// }

// export default Home

const Home = () => {
  return (
    <>
      {/* <Header /> */}

      <main>
        <p className="tagline">Design. Develop. Deploy</p>
        <Button variant="ghost" style={{ padding: "0vh 1vw" }}>
          Know more
        </Button>
      </main>

      <Projects />
      <Skills />
      <About/>

      <Footer/>
    </>
  );
};

export default Home;
