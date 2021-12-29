import "./App.css";
import React, { Component } from "react";
import SlideShow from "../components/SlideShow/SlideShow.js";
import Navbar from "../components/NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import GridViewCategories from "../components/GridViewProduct/GridViewCategories";
import Footer from "../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div><SlideShow /></div>
        {/* <GridViewProduct product={products} /> */}
        <GridViewCategories/>
        <Footer/>
      </Router>
    );
  }
}

export default App;
