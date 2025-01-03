import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Defaultlayout = ({children}) => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      {children}
      <Contact/>
      <Footer/>
    </>
  )
}

function NoLayout({ children}) {
    return <>{children}</>
}

export default Defaultlayout
