import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "./Projects.css";
export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }
  return (
    <>
      <Container fluid id="proUt">
        <Container id="proIn">
          <p>OUR WORK</p>
          <h2>Featured Projects</h2>
          <Carousel activeIndex={index} onSelect={handleSelect} id='projectCarousel'>
            <Carousel.Item>
              <div>
                <Row>
                  <Col lg="6" className="colImg">
                    <img
                      className="w-100"
                      src="	https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/mb_web_banner-1709366171.jpg"
                      alt=""
                    />
                  </Col>
                  <Col lg="6" className="colContent">
                    <div className="d-flex align-items-center column-gap-2">
                      <img
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp"
                        alt=""
                      />
                      <h4>Ashapurna NRI</h4>
                    </div>
                    <p>
                      Ashapurna NRI is the 38th project of Ashapurna Buildcon
                      Ltd. The project hosts classy Luxury Villas in Jodhpur
                      that come in a package of European architecture villas in
                      Jodhpur with 5-star luxury amenities like club house full
                      of activities...
                    </p>
                    <div className="d-flex column-gap-4 justify-content-between">
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                    </div>
                    <button id="proBtn">See All</button>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <Row>
                  <Col lg="6" className="colImg">
                    <img
                      className="w-100"
                      src="	https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/mb_web_banner-1709366171.jpg"
                      alt=""
                    />
                  </Col>
                  <Col lg="6" className="colContent">
                    <div className="d-flex align-items-center column-gap-2">
                      <img
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp"
                        alt=""
                      />
                      <h4>Ashapurna NRI</h4>
                    </div>
                    <p>
                      Ashapurna NRI is the 38th project of Ashapurna Buildcon
                      Ltd. The project hosts classy Luxury Villas in Jodhpur
                      that come in a package of European architecture villas in
                      Jodhpur with 5-star luxury amenities like club house full
                      of activities...
                    </p>
                    <div className="d-flex column-gap-4 justify-content-between">
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                    </div>
                    <button id="proBtn">See All</button>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div>
                <Row>
                  <Col lg="6" className="colImg">
                    <img
                      className="w-100"
                      src="	https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/mb_web_banner-1709366171.jpg"
                      alt=""
                    />
                  </Col>
                  <Col lg="6" className="colContent">
                    <div className="d-flex align-items-center column-gap-2">
                      <img
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/4db83251-b9ff-4db3-9e89-8a9f6a872165-1669179075.webp"
                        alt=""
                      />
                      <h4>Ashapurna NRI</h4>
                    </div>
                    <p>
                      Ashapurna NRI is the 38th project of Ashapurna Buildcon
                      Ltd. The project hosts classy Luxury Villas in Jodhpur
                      that come in a package of European architecture villas in
                      Jodhpur with 5-star luxury amenities like club house full
                      of activities...
                    </p>
                    <div className="d-flex column-gap-4 justify-content-between">
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                      <div className="facility d-flex column-gap-2">
                        <img
                          src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/amenity/920174ff-d936-40c9-9be9-bdec0f1df16f-1668411976.svg"
                          alt=""
                        />
                        <div>
                          <h5>RERA</h5>
                          <p>APPROVED</p>
                        </div>
                      </div>
                    </div>
                    <button id="proBtn">See All</button>
                  </Col>
                </Row>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </>
  );
}
