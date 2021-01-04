import React from "react";
import { Row, Col } from "react-bootstrap";
function HeaderSlide(props) {
  console.log(props);
  return (
    <div className="main">
      <Row>
        <Col sm={8} style={{ backgroundColor: "pink" }}>
          <div className="image">
            <img
              src={props.details.imageUrl}
              alt={props.details.imageUrl}
              className="img"
            />
          </div>
        </Col>
        <Col sm={4}>
          <div className="content">
            <h1>{props.details.heading}</h1>
            <p>{props.details.description}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HeaderSlide;
