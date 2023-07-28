
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./pages.css";


function Icing() {
  const images = [
    {url:"https://iili.io/HZd4EZu.jpg"},
    {url:"https://iili.io/HZd40u9.jpg"},
    {url:"https://iili.io/HZd41je.jpg"},
    {url:"https://iili.io/HZd4MCb.jpg"},
    {url:"https://iili.io/HZd4VGj.jpg"},
    {url:"https://iili.io/HZd4W6x.jpg"},
    {url:"https://iili.io/HZd4h3Q.jpg"},
    {url:"https://iili.io/HZd4jaV.jpg"},
    {url:"https://iili.io/HZd4NyP.jpg"},
    {url:"https://iili.io/HZd4eu1.jpg"},
    {url:"https://iili.io/HZd4kwF.jpg"},
    {url:"https://iili.io/HZd4vZg.jpg"},
    {url:"https://iili.io/HZd4Sna.jpg"},
    {url:"https://iili.io/HZd46ap.jpg"},
    {url:"https://iili.io/HZd4UMJ.jpg"},
    {url:"https://iili.io/HZd4g6v.jpg"},
    {url:"https://iili.io/HZd44FR.jpg"},
    {url:"https://iili.io/HZd4P8N.jpg"},
    {url:"https://iili.io/HZd4s9I.jpg"},
    {url:"https://iili.io/HZd4Lut.jpg"},
    {url:"https://iili.io/HZd4Ztn.jpg"},
    {url:"https://iili.io/HZd4Dns.jpg"},
    {url:"https://iili.io/HZd4bMG.jpg"},
    {url:"https://iili.io/HZd4yF4.jpg"},
    {url:"https://iili.io/HZd4mPf.jpg"},
    {url:"https://iili.io/HZd6d9S.jpg"},
    {url:"https://iili.io/HZd6HS2.jpg"},
    {url:"https://iili.io/HZd62A7.jpg"},
    {url:"https://iili.io/HZd63N9.jpg"},
    {url:"https://iili.io/HZd6qMb.jpg"}
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
          <div className="header__content">All Icing Cakes</div>
          <CardGroup>
              {images.map (image => (
                <Row className="col-sm-6 col-lg-3 row-card ">
                  <Card style={{display:'flex',flexWrap:'noWrap'}}>
                  <Card.Img  src={image.url} />
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

export default Icing;