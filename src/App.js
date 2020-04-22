import React, { Component, Fragment } from "react";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Experience from "./components/Experience/Experience";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Nav/NavBar";
import Sticky from "react-sticky-el";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Hero />
        <Sticky className="Sticky">
          <NavBar />
        </Sticky>
        <About />
        <Experience />
        {/* <Contact /> */}
      </Fragment>
    );
  }
}

export default App;
