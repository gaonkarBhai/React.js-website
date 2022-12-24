// -->> 22/12/2022
import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// importing components
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";

function App() {
  // Routing
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/services" element={ <Services/> }/>
        <Route path="/about" element={ <About/> }/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
