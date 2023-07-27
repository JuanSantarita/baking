
import React from "react";
import Navbar from "./components/navbar";
import Carousel from './components/react-bootstrap/Carousel';
import Card from './components/react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function App() {
  
  return (
    <div>
      <Container>
        <Row>
          <Navbar />
        </Row>
        <div class="homepage_carousel row">
          <Carousel/>
        </div>
        <Row>
          <Card/>
        </Row>
      </Container>
    </div>
  );
}

export default App;