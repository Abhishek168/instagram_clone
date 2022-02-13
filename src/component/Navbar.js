import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/Heading.css";

function Navbar() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <h2 className="instagram-logo">Instagram</h2>
          </Col>
          <Col xs={3}>
            <input
              placeholder="Search"
              className="form-control"
              type="search"
              aria-label="Search"
            />
          </Col>
          <Col xs={1}>HOME</Col>
          <Col xs={1}>Likes</Col>
          <Col xs={1}>PROFILE</Col>
        </Row>
        <Row></Row>
      </Container>
    </>
  );
}

export default Navbar;
