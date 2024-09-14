import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import "./Slidermain.css";
export default function Slidermain() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Container fluid id="sliderCnt">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="slideImg"
            src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/anmol_web_banner-1707802057_(1)-1709555545.jpg"
            text="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slideImg"
            src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/anmol_web_banner-1707802057_(1)-1709555545.jpg"
            text="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="slideImg"
            src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/slider/anmol_web_banner-1707802057_(1)-1709555545.jpg"
            text="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container
        fluid
        className="shadow p-3 mb-5 bg-body-tertiary"
        id="inputCnt">
        <Row className="d-flex justify-content-between">
          <Col>
            <input type="text" placeholder="Name" />
          </Col>
          <Col>
            <input type="text" placeholder="Email" />
          </Col>
          <Col>
            <input type="text" placeholder="Phone" />
          </Col>
          <Col>
            <input type="text" placeholder="Select Property" />
          </Col>
          <Col>
            <input type="text" placeholder="Explain Your Query" />
          </Col>
          <Col className="me-3" id="colBtn">
            <button>Submit</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
