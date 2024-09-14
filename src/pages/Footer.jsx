import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailOpen } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import './Footer.css'

export default function Footer() {
  return (
    <>
      <Container fluid id="footerMain">
        <Container id="footerCont">
          <footer className="d-flex">
            <div id="contacts" className="ps-4">
              <div>
                <img
                  id="footLogo"
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg"
                  alt=""
                />
              </div>
              <div className="d-flex align-items-center my-3 column-gap-2">
                <div className="boldItag">
                  <IoCall />
                </div>
                <div>
                  <p>9314041747</p>
                  <p>0291-2514747 , 9610383747</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-3 column-gap-2">
                <div className="boldItag">
                  <IoMdMailOpen />
                </div>
                <div>
                  <p>marketing@ashapurna.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center my-3 column-gap-2">
                <div className="boldItag">
                  <FaMapLocationDot />
                </div>
                <div>
                  <p>
                    -, 4A, EAST PATEL NAGAR, CIRCUIT HOUSE <br /> ROAD, OPPOSITE
                    LIC OFFICE, Jodhpur, <br />
                    Rajasthan, 342011
                  </p>
                </div>
              </div>
            </div>
            <div id="links" className="ps-4">
              <div className="linksIn">
                <h3>Useful Links</h3>
                <div className="footerlinkList">
                  <ul className="d-flex flex-wrap column-gap-4 row-gap-3">
                    <li>Social Responsibility</li>
                    <li>Corporate Profile</li>
                    <li>Why invest in jodhpur?</li>
                    <li>RERA Disclaimer</li>
                    <li>EMI Calculator</li>
                    <li>Referral Scheme</li>
                  </ul>
                </div>
              </div>
              <div className="linksIn">
                <h3>Important Links</h3>
                <div className="footerlinkList">
                  <ul className="d-flex flex-wrap column-gap-4 row-gap-3">
                    <li>Residential Projects</li>
                    <li>Commercial projects</li>
                    <li>Investors Club</li>
                    <li>NRI corner</li>
                    <li>Career</li>
                    <li>Become a Partner</li>
                    <li>Our Testimonials</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
          <div
            id="followDiv"
            className="d-flex flex-column justify-content-center align-align-items-center text-white text-center">
            <h3>Follow Us On</h3>
            <div className="d-flex justify-content-center column-gap-2">
              <FaFacebook />
              <BsInstagram />
              <FaYoutube />
              <FaTwitter />
              <FaPinterestP />
              <FaLinkedinIn />
            </div>
          </div>
        </Container>
      </Container>
      <Container fluid id="footerLower">
        <Container>
          <div id="footAlpha">
            <ul className="d-grid row-gap-3 list-unstyled justify-content-center flex-wrap text-capitalize">
              <div className="d-flex justify-content-center gap-5">
                <li>real estate developer in jodhpur</li>
                <li>top builders in jodhpur</li>
                <li>top residental projects in jodhpur</li>
              </div>
              <div className="d-flex justify-content-center gap-5">
                <li>Commercial property in jodhpur</li>
                <li>Houses in Rajasthan</li>
                <li>Flats In Jodhpur</li>
                <li>Villas In Jodhpur</li>
                <li>Plots In Jodhpur</li>
              </div>
              <div className="d-flex justify-content-center gap-5">
                <li>2BHK Flats In Jodhpur</li>
                <li>JDA Property In Jodhpur</li>
                <li>Property Type</li>
              </div>
            </ul>
          </div>
          <div className="mt-4" id="footBeta">
            <p className="text-center">
              The information on the website regarding the project, except the
              legal documents, is purely indicative and representational and do
              not constitute a promise by the company. Further, <br />
              the Company/Architects reserve the right to add / delete any
              details / specifications / elevations mentioned, if so warranted.
            </p>
          </div>
        </Container>
      </Container>
      <Container fluid id="copyOut">
        <Container id="copyTank">
          <p className="m-0">Copyright © 2024 Ashapurna Buildcon Limited</p>
        </Container>
      </Container>
    </>
  );
}
