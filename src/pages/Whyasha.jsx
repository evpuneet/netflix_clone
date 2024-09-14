import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './Whyasha.css'
export default function whyAsha() {
  return (
    <>
      <Container fluid id="whyBG">
        <div className="d-flex" id="whyMain">
          <div id="main1">
            <span>WHY US</span>
            <h2>Why Ashapurna Is The Best Choice?</h2>
            <p>
              We are the leading Real Estate Developer in Rajasthan, offering an
              unparalleled property development experience with a proven track
              record of excellence and a commitment to customer satisfaction,
              For those who are seeking quality, affordability, and reliability
              we are the perfect choice whether you're looking for a Dream Home
              or a thriving commercial space, Ashapurna Buildcon has the
              expertise, resources, and dedication to make your dream into a
              reality.
            </p>
          </div>
          <div id="main2">
            <div className="position-relative">
              <div className="position-absolute" id='cardPose'>
                <div className="d-flex justify-content-center flex-wrap row-gap-2 column-gap-4">
                  <div className="whyCard shadow-lg">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
                      alt=""
                    />
                    <h3>Property Care Service</h3>
                    <p>
                      We take care of your home like a true custodian. Our
                      support team is usually there...
                    </p>
                    <a href="">Read More</a>
                  </div>
                  <div className="whyCard shadow-lg">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
                      alt=""
                    />
                    <h3>Property Care Service</h3>
                    <p>
                      We take care of your home like a true custodian. Our
                      support team is usually there...
                    </p>
                    <a href="">Read More</a>
                  </div>
                  <div className="whyCard shadow-lg">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
                      alt=""
                    />
                    <h3>Property Care Service</h3>
                    <p>
                      We take care of your home like a true custodian. Our
                      support team is usually there...
                    </p>
                    <a href="">Read More</a>
                  </div>
                  <div className="whyCard shadow-lg">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/why_choose_us/356b3cc2-741e-4c46-920d-7b0ab40eb1df-1669190319.svg"
                      alt=""
                    />
                    <h3>Property Care Service</h3>
                    <p>
                      We take care of your home like a true custodian. Our
                      support team is usually there...
                    </p>
                    <a href="">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
