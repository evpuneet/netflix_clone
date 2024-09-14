import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Events.css";

export default function Events() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed: 1500,
  };
  return (
    <>
      <Container fluid id="eventOut">
        <Container id="eventIn">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2>Media and Event</h2>
            <button>See All</button>
          </div>

          <Slider {...settings} id="slickSliderFoot">
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="p-1">
                <div className="eventslideOut px-2 ">
                  <div className="pb-2 rounded-1 shadow-sm">
                    <div>
                      <img
                        className="w-100"
                        src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/utsav_camps/environment_day_banner-1717676499.jpg"
                        alt=""
                      />
                    </div>
                    <div className="eventCardDetails ps-3">
                      <h3 className="my-3">World Environment Day 2024</h3>
                      <div className="d-flex gap-2 align-items-center">
                        <FaLocationArrow />
                        <span>Jodhpur</span>
                      </div>
                      <div className="d-flex gap-2 align-items-center">
                        <FaRegClock />
                        <span>2024-07-16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </Container>
      </Container>
    </>
  );
}
