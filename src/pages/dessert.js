
import React from "react";
import Navbar from "../components/navbar";
// import Homepage from "./components/homepage";
//import Carousel from './react-bootstrap/Carousel';
import Card from '../components/react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./pages.css";


function Dessert() {
  
  return (
    <div className="pages__container">
    <Container>
      <Row>
        <Navbar />
      </Row>
      </Container>
      </div>
  );
}

export default Dessert;