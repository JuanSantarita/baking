import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import React from "react";

function GroupExample() {
    const images = [{url:"https://iili.io/HiPTVb2.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HiPTola.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/Hsk39CQ.jpg", name:"fondant 3", desc: "test3"},
                  {url: "https://iili.io/Hsk2pZx.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/Hsk2mjj.jpg", name: "fondant 5", desc: "test5"},
                 ]; 
  return (
    <CardGroup>
         {images.map (image => (
            <Card>
            <Card.Img variant="top" src={image.url} />
            <Card.Body>
              <Card.Title>{image.name}</Card.Title>
              <Card.Text>
                {image.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        ))};
    </CardGroup>
  );
}

export default GroupExample;