import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Photo from "./components/Photo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
   <Navbar/>
   <Hero/>
   <About/>
   <Photo/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;
