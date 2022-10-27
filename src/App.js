import React from "react";
import { Route, Routes} from 'react-router-dom';
import { Home } from "./components/Home";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Services} from "./components/Services";
import {Policy} from "./components/Policy";
import {List} from "./components/List";
import { Footer } from "./components/Footer";



function App() {
  return (
  
  <>
      <List/>
      <Routes >
        <Route path="/Travel-app" element={<Home/>}/>
        <Route path="/home"   element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/policy" element={<Policy/>}/>
      </Routes>
      <Footer/>
  </>
  );
  }

export default App;
