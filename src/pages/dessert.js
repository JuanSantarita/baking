
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./pages.css";


function Dessert() {
  const images = [
    {url:"https://iili.io/HZdD3CP.jpg"},
    {url:"https://iili.io/HZdDK6F.jpg"},
    {url:"https://iili.io/HZdDJjV.jpg"},
    {url:"https://iili.io/HZdDq3g.jpg"},
    {url:"https://iili.io/HZdDBaa.jpg"},
    {url:"https://iili.io/HZdDC8J.jpg"},
    {url:"https://iili.io/HZdDnyv.jpg"},
    {url:"https://iili.io/HZdDxuR.jpg"},
    {url:"https://iili.io/HZdDzjp.jpg"},
    {url:"https://iili.io/HZdDIZN.jpg"},
    {url:"https://iili.io/HZdDunI.jpg"},
    {url:"https://iili.io/HZdDR6X.jpg"},
    {url:"https://iili.io/HZdD7Fn.jpg"},
    {url:"https://iili.io/HZdDYas.jpg"},
    {url:"https://iili.io/HZdDa8G.jpg"},
    {url:"https://iili.io/HZdDl9f.jpg"},
    {url:"https://iili.io/HZdDMnS.jpg"},
    {url:"https://iili.io/HZdDEt2.jpg"},
    {url:"https://iili.io/HZdD1wl.jpg"},
    {url:"https://iili.io/HZdDVM7.jpg"},
    {url:"https://iili.io/HZdDWP9.jpg"}
  ]; 

  return (
    <div className="pages__container">
    <Container className="header__section">
      <Row >
        <Navbar />
      </Row>
    </Container>
    <Container>
      <Row className="body__container">
          <div className="header__content">All Dessert Table</div>
          <CardGroup>
              {images.map (image => (
                <Row className="col-sm-6 col-lg-3 row-card ">
                  <Card style={{display:'flex',flexWrap:'noWrap'}}>
                    
                  <Card.Img  src={image.url} className="dessert__img"/>
                  <Card.Body>
                  </Card.Body>
                </Card>
                </Row>
              ))}
          </CardGroup>
      </Row>
    </Container>
  </div>
  );
}

export default Dessert;