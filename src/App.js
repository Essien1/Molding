import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
import Photo from "./components/Photo";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery";
import Defaultlayout from "./routes/Defaultlayout";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Navbar /> */}
          {/* <Hero /> */}
          {/* <About /> */}
          <Route path="/" element={<Defaultlayout><Photo /></Defaultlayout>} />
          <Route path="/gallery" element={<NoLayout><Gallery /></NoLayout>} />
          {/* <Contact /> */}
          {/* <Footer /> */}
        </Routes>
      </Router>
    </div>
  );
}
// Define NoLayout Component
function NoLayout({ children }) {
  return <>{children}</>;
}


export default App;
