import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  const images = [{url:"https://iili.io/HiPTVb2.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HiPTola.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/Hsk39CQ.jpg", name:"fondant 3", desc: "test3"},
                  {url: "https://iili.io/Hsk2pZx.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/Hsk2mjj.jpg", name: "fondant 5", desc: "test5"},
                 ]; 
  return (
    
    <Carousel>
      {images.map (image => (
        <Carousel.Item>
              <img src={image.url} width="500" class="carousel_img"/>
              <Carousel.Caption>
            <div class="image_name">{image.name}</div>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default UncontrolledExample;