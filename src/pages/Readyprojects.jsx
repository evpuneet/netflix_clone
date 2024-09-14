import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Readyprojects.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
export default function Readyprojects() {
  return (
    <>
      <Container fluid className="position-relative" id="readyOut">
        <Container id="readuIn" >
          <span>PROJECT OVERVIEW</span>
          <h2>Ready & Nearing Completion Projects</h2>
          <p>
            Meticulously crafted and emotionally designed, Ashapurna villas &
            flats are the perfect place to be in. A lifestyle benchmark in{" "}
            <br />
            Rajasthan, today and tomorrow, our successful communities are our
            biggest achievement.
          </p>
          <div className="position-absolute" id='readyCard'>
            <div className="d-flex justify-content-around column-gap-1">
              <div className="overView position-relative shadow-lg">
                <img
                  className="w-100 rounded-2"
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp"
                  alt=""
                />
                <div className="position-absolute unitStatus">
                  Few Units Left
                </div>
                <div className="position-absolute overCard">
                  <div className="d-flex align-items-center column-gap-2">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                      alt=""
                    />
                    <h5>Ashapurna Anmol I,II,III</h5>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <span>
                      <IoLocationSharp />
                    </span>
                    <p>Near New High Court , Jodhpur</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between hidePara">
                    <div className="d-flex align-items-center column-gap-2">
                      <span>
                        <FaHome />
                      </span>
                      <p>Near New High Court , Jodhpur</p>
                    </div>
                    <button>See Al</button>
                  </div>
                </div>
              </div>
              <div className="overView position-relative shadow-lg">
                <img
                  className="w-100 rounded-2"
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp"
                  alt=""
                />
                <div className="position-absolute unitStatus">
                  Few Units Left
                </div>
                <div className="position-absolute overCard">
                  <div className="d-flex align-items-center column-gap-2">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                      alt=""
                    />
                    <h5>Ashapurna Anmol I,II,III</h5>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <span>
                      <IoLocationSharp />
                    </span>
                    <p>Near New High Court , Jodhpur</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between hidePara">
                    <div className="d-flex align-items-center column-gap-2">
                      <span>
                        <FaHome />
                      </span>
                      <p>Near New High Court , Jodhpur</p>
                    </div>
                    <button>See Al</button>
                  </div>
                </div>
              </div>
              <div className="overView position-relative shadow-lg">
                <img
                  className="w-100 rounded-2"
                  src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-basera-flats-in-jodhpur-1682081467.webp"
                  alt=""
                />
                <div className="position-absolute unitStatus">
                  Few Units Left
                </div>
                <div className="position-absolute overCard">
                  <div className="d-flex align-items-center column-gap-2">
                    <img
                      src="https://d3qnldyv492i08.cloudfront.net/ashapurna/images/projects/ashapurna-anmol-budget-villas-in-jodhpur-logo-1677495339.webp"
                      alt=""
                    />
                    <h5>Ashapurna Anmol I,II,III</h5>
                  </div>
                  <div className="d-flex align-items-center column-gap-2">
                    <span>
                      <IoLocationSharp />
                    </span>
                    <p>Near New High Court , Jodhpur</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between hidePara">
                    <div className="d-flex align-items-center column-gap-2">
                      <span>
                        <FaHome />
                      </span>
                      <p>Near New High Court , Jodhpur</p>
                    </div>
                    <button>See Al</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
