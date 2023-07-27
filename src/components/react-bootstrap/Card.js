import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {LinkContainer} from 'react-router-bootstrap';

function GroupExample() {
    const images = [{url:"https://iili.io/HiPTVb2.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HiPTola.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/Hsk39CQ.jpg", name:"fondant 3", desc: "test3"},
                  {url: "https://iili.io/Hsk2pZx.jpg", name:"fondant 4", desc: "test4"}
                 ]; 
  return (
    <Container className="Card__container">
         <LinkContainer to="/fondant">
          <a className="card__link">View all Fondant Cakes</a> 
        </LinkContainer>
      <CardGroup>
         {images.map (image => (
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
         <a className="card__link">View all Icing Cakes</a> 
      </LinkContainer>
      <CardGroup>
         {images.map (image => (
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
        <a className="card__link">View all Dessert Table</a> 
      </LinkContainer>
      <CardGroup>
         {images.map (image => (
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
      
    </Container>
   
  );
}

export default GroupExample;