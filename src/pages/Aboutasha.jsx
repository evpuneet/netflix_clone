import React from 'react'
import './Aboutasha.css'
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
export default function Aboutasha() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <>
      <Container fluid id="aboutOUT">
        <Container id="aboutIn">
          <Row>
            <Col lg="6" id="abOne">
              <span>OUR TESTIMONIALS</span>
              <h2>What They're Saying About Ashapurna?</h2>
              <p>
                From the heart of South Mumbai to the western suburbs and beyond
                take your pick from our finest addresses in the city. Select a
                location to view the property.
              </p>
              <button>See All</button>
            </Col>
            <Col className="d-flex justify-content-end position-relative " id='caroOut'>
              <div id='bgDots' className='position-absolute'>
                <img
                  src="https://ashapurna.com/images/testimonials/bg_dots.png"
                  alt=""
                />
              </div>
              <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                id="aboutCaro">
                <Carousel.Item>
                  <div className="caroCard bg-white d-flex justify-content-center align-items-center flex-column text-black p-5 pt-0 position-relative">
                    <div className="pt-3 mb-4 pb-3">
                      <h2>Mr Dharmveer Singh</h2>
                      <h3>Ashapurna Heritage</h3>
                    </div>
                    <p className="pt-4">
                      Hi, I am Dharmveer Singh Having resided in Ashapurna
                      Heritage for 3 years, I can confidently express my deep
                      satisfaction with the environment. The positive vibes and
                      unique atmosphere make it stand out in Jodhpur. Upon my
                      first visit, I decided that if I were to buy a house, it
                      would only be in Ashapurna Heritage.
                    </p>
                  </div>
                  <div className="rounded-circle position-absolute fixImgCard d-flex justify-content-center align-items-center">
                    <img
                      className="rounded-circle"
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.44.50-1706352837.jpeg"
                      alt=""
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="caroCard bg-white d-flex justify-content-center align-items-center flex-column text-black p-5 pt-0 position-relative">
                    <div className="pt-3 mb-4 pb-3">
                      <h2>Mr Dharmveer Singh</h2>
                      <h3>Ashapurna Heritage</h3>
                    </div>
                    <p className="pt-4">
                      Hi, I am Dharmveer Singh Having resided in Ashapurna
                      Heritage for 3 years, I can confidently express my deep
                      satisfaction with the environment. The positive vibes and
                      unique atmosphere make it stand out in Jodhpur. Upon my
                      first visit, I decided that if I were to buy a house, it
                      would only be in Ashapurna Heritage.
                    </p>
                  </div>
                  <div className="rounded-circle position-absolute fixImgCard d-flex justify-content-center align-items-center">
                    <img
                      className="rounded-circle"
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.44.50-1706352837.jpeg"
                      alt=""
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="caroCard bg-white d-flex justify-content-center align-items-center flex-column text-black p-5 pt-0 position-relative">
                    <div className="pt-3 mb-4 pb-3">
                      <h2>Mr Dharmveer Singh</h2>
                      <h3>Ashapurna Heritage</h3>
                    </div>
                    <p className="pt-4">
                      Hi, I am Dharmveer Singh Having resided in Ashapurna
                      Heritage for 3 years, I can confidently express my deep
                      satisfaction with the environment. The positive vibes and
                      unique atmosphere make it stand out in Jodhpur. Upon my
                      first visit, I decided that if I were to buy a house, it
                      would only be in Ashapurna Heritage.
                    </p>
                  </div>
                  <div className="rounded-circle position-absolute fixImgCard d-flex justify-content-center align-items-center">
                    <img
                      className="rounded-circle"
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/testimonial/WhatsApp_Image_2024-01-27_at_15.44.50-1706352837.jpeg"
                      alt=""
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );}
