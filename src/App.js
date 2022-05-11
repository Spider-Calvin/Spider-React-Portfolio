import React from "react";
import "./App.css";
import { About, Work, Footer, Header, Skills, Testimonial } from "./Container";
import { Navbar} from './Components'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
