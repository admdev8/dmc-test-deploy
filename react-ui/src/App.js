import React, { Component } from 'react';
import './App.css';
import './css/grayscale.css';
import './css/grayscale.min.css';
// import $ from 'jquery';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Search from './Components/Search';
import Map from './Components/Map';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    console.log("render: True");
     return (
      <div className="App">
        <Header />
        <Navbar />
        <About />
        <Search />
        <Map />
        <Contact />
        <Register />
        <Footer />
      </div>
    );
  }
}

export default App;
