import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
export default function Header() {
    
  return (
    <>
      <div>
        <Container fluid id="head">
          <Navbar
            bg="light"
            data-bs-theme="light"
            className="d-flex bg-white justify-content-between px-4">
            <img
              id="logo"
              src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/company-profile/footer_logo/ffe726b1-c8b0-4798-8c89-ebad0cb7ebf3-1673702923.svg"
              alt=""
            />
            <Container className="d-flex justify-content-end mx-0 w-100 navCnt">
              <Nav className="gap-xl-3 bg-white navCnt">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#About Us">About Us</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
                <Nav.Link href="#Media And Events">Media And Events</Nav.Link>
                <Nav.Link href="#Blogs">Blogs</Nav.Link>
                <Nav.Link href="#Blogs">Contact Us</Nav.Link>
              </Nav>
              <Navbar.Brand
                href="#Contact Us"
                className="d-flex justify-content-center align-items-center"
                id="contactBtn">
                <span>Enquire</span>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </Container>
      </div>
    </>
  );
}
