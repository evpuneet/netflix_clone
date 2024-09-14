import React from 'react'
import {Container, Col, Row} from "react-bootstrap"
import './Welcome.css'

export default function Welcome() {
  return (
    <>
      <Container fluid id="welCon">
        <div className="d-flex justify-content-between" id="welRow">
          <div id="imgDiv">
            <img
              className=""
              src="	https://d3qnldyv492i08.cloudfront.net/ashapurna/images/about_us/aboutus.webp"
              alt=""
            />
          </div>
          <div id="contDiv" className="position-relative">
            <span className='text-uppercase'>About Us</span>
            <h2>Welcome to Ashapurna</h2>
            <p>
              Ashapurna Buildcon started its journey in 1996 as a private
              limited company and within a year the company gained many core
              values and turned into a limited company. <br />
              <br /> In a relatively short period of time, Ashapurna has grown
              and gained a trustworthy real estate name in the entire Rajasthan.
              The company always tried hard to deliver everything best to its
              customers and built all their categories-Luxury, Mix segments, and
              affordable homes.
            </p>
            <div className="position-absolute" id="counterFix">
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex flex-column align-items-center"
                  id="WelcomeSmallBox">
                  <div className="welImg d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png"
                      alt=""
                    />
                  </div>
                  <h2>27+</h2>
                  <p>Years Of Experience</p>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  id="WelcomeSmallBox">
                  <div className="welImg d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png"
                      alt=""
                    />
                  </div>
                  <h2>27+</h2>
                  <p>Years Of Experience</p>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  id="WelcomeSmallBox">
                  <div className="welImg d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png"
                      alt=""
                    />
                  </div>
                  <h2>27+</h2>
                  <p>Years Of Experience</p>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  id="WelcomeSmallBox">
                  <div className="welImg d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png"
                      alt=""
                    />
                  </div>
                  <h2>27+</h2>
                  <p>Years Of Experience</p>
                </div>
                <div
                  className="d-flex flex-column align-items-center"
                  id="WelcomeSmallBox">
                  <div className="welImg d-flex justify-content-center align-items-center">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/home-page/experience-check.png"
                      alt=""
                    />
                  </div>
                  <h2>27+</h2>
                  <p>Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
