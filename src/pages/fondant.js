
import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Navbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./pages.css";


function Fondant() {

  const images = [
                  {url:"https://iili.io/HZJMv72.jpg", name:"Mermaid Theme", desc: "2000"},
                  {url:"https://iili.io/HZJMgI9.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJMrXe.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJM4Lu.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJMPqb.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJMsrx.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJMi1j.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJMZ7V.jpg", name:"fondant 3", desc: "test3"},
                  {url: "https://iili.io/HZJMQdQ.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJMtkB.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJMDmP.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJMyLg.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJVHBa.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVRv2.jpg", name:"fondant 3", desc: "test3"},
                  {url: "https://iili.io/HZJVu24.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVxBs.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJVzEG.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJVnQn.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVChX.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJVBIt.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJVfpI.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJVKkN.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVF7p.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJVdrv.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJVJEJ.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVAYl.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJV5pS.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJVYT7.jpg", name:"fondant 4", desc: "test4"},
                  {url:"https://iili.io/HZJVaj9.jpg",name:"Fondant 1", desc : "test1"},
                  {url:"https://iili.io/HZJVcQe.jpg",name:"Fondant 2", desc:"test2"},
                  {url:"https://iili.io/HZJV0Cu.jpg", name:"fondant 3", desc: "test3"},
                  {url:"https://iili.io/HZJV1Eb.jpg", name:"fondant 4", desc: "test4"},
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
            <div className="header__content">All fondant Cakes</div>
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

export default Fondant;