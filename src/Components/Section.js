import React from "react";
import { Row, Col } from "react-bootstrap";
import chair from "./chair.jpg";

function Section() {
  return (
    <div className="section">
      <Row>
        <Col lg={3} md={3} sm={4} style={{ backgroundColor: "green" }}>
          <div className="section_container">
            <img src={chair} />
          </div>
        </Col>
        <Col lg={6} md={6} sm={4} style={{ backgroundColor: "red" }}>
          <div className="section_text" style={{ backgroundColor: "yellow" }}>
            <h1>ABOUT OUR FURNITURE</h1>
            <p>
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </Col>
        <Col lg={3} md={3} sm={4} style={{ backgroundColor: "green" }}>
          <div className="section_container">
            <img src={chair} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Section;
