
import React from "react";
import Navbar from "./components/navbar";
// import Homepage from "./components/homepage";
import Carousel from './components/react-bootstrap/Carousel';
import Card from './components/react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div class="container">
      <div class="row">
        <Navbar />
      </div>
      <div class="homepage_carousel row">
        <Carousel/>
       </div>
       <div class="row">
        <Card/>
       </div>
    </div>
  );
}

export default App;