import React from "react";
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  const images = [{url:"https://iili.io/HQDXXa9.jpg"},
                  {url:"https://iili.io/HQDXjyu.jpg"},
                  {url: "https://iili.io/HQDXW37.jpg"},
                  {url:"https://iili.io/HQDXhve.jpg"},
                  {url: "https://iili.io/HQDXeZx.jpg"},
                  {url:"https://iili.io/HQDXvCQ.jpg"},
                 ]; 
  return (
    
    <Carousel>
      {images.map (image => (
        <Carousel.Item>
              <img src={image.url} class="carousel_img"/>
              <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default UncontrolledExample;