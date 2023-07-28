import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LinkContainer} from 'react-router-bootstrap';

function GroupExample() {
    const fondantImages = [{url:"https://iili.io/HZJMPqb.jpg",name:"Roblox Theme", desc : "Php 3000"},
                  {url:"https://iili.io/HZJVBIt.jpg",name:"Blippi Theme", desc:"Php 3000"},
                  {url:"https://iili.io/HZJMtkB.jpg", name:"Music Theme", desc: "Php 2000"},
                  {url: "https://iili.io/HZJVRv2.jpg", name:"Harry Potter", desc: "Php 6000"}
                 ]; 
    const icingImages = [{url:"https://iili.io/HZd4Ztn.jpg",name:"Sesame Street", desc : "Php 2000"},
                 {url:"https://iili.io/HZd6HS2.jpg",name:"Voltes V Theme", desc:"Php 1500"},
                 {url:"https://iili.io/HZd4EZu.jpg", name:"Candyland Theme", desc: "Php 2000"},
                 {url: "https://iili.io/HZd4vZg.jpg", name:"Frozen Theme", desc: "Php 1500"}
                ]; 

                const dessertImages = [{url:"https://iili.io/HZdDunI.jpg",name:"Sesame Street", desc : "Php 5000"},
                 {url:"https://iili.io/HZdDxuR.jpg",name:"Harry Potter", desc:"Php 4500"},
                 {url:"https://iili.io/HZdDVM7.jpg", name:"Music Theme", desc: "Php 6000"},
                 {url: "https://iili.io/HZdDa8G.jpg", name:"Birthday Theme", desc: "Php 4500"}
                ]; 
  return (
   
    <Container className="Card__container">
         <LinkContainer to="/fondant">
          <a className="card__link">Fondant Cakes</a> 
        </LinkContainer>
      <CardGroup>
         {fondantImages.map (image => (
          <Row className="col-sm-6 col-lg-3 row-card ">
            <Card style={{display:'flex',flexWrap:'noWrap'}}>
            <Card.Img  src={image.url} />
            <Card.Body>
              <Card.Title>{image.name}</Card.Title>
              <Card.Text>
                {image.desc}
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
        ))}
    </CardGroup>

    <LinkContainer to="/icing">
         <a className="card__link">Icing Cakes</a> 
      </LinkContainer>
      <CardGroup>
         {icingImages.map (image => (
          <Row className="col-sm-6 col-lg-3 row-card ">
            <Card style={{display:'flex',flexWrap:'noWrap'}}>
            <Card.Img  src={image.url} />
            <Card.Body>
              <Card.Title>{image.name}</Card.Title>
              <Card.Text>
                {image.desc}
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
        ))}
    </CardGroup>

      <LinkContainer to="/dessert">
        <a className="card__link">Dessert Table</a> 
      </LinkContainer>
      <CardGroup>
         {dessertImages.map (image => (
          <Row className="col-sm-6 col-lg-3 row-card ">
            <Card style={{display:'flex',flexWrap:'noWrap'}}>
            <Card.Img  src={image.url} className="dessert__img"/>
            <Card.Body>
              <Card.Title>{image.name}</Card.Title>
              <Card.Text>
                {image.desc}
              </Card.Text>
            </Card.Body>
          </Card>
          </Row>
        ))}
    </CardGroup>
      
    </Container>
   
  );
}

export default GroupExample;