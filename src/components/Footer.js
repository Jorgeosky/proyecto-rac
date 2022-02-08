import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footerContainer">
      <Row className="mt-4 footerContent">
        <Col className="footerList" md={3} sm={6}>
          <h2>Rent a car</h2>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Policies</li>
            <li>Careers</li> sm={3}
            <li>Press</li>
            <li>OpenRoad</li>
            <li>Turo shop</li>
          </ul>
        </Col>
        <Col className="footerList" md={3} sm={6}>
          <h2>Locations</h2>
          <ul>
            <li>Colombia</li>
            <li>Peru</li>
            <li>Mexico</li>
          </ul>
        </Col>
        <Col className="footerList" md={3} sm={6}>
          <h2>Explore</h2>
          <ul>
            <li>Book a car</li>
            <li>Weddings</li>
            <li>Trust and safety</li>
            <li>Sustainability</li>
            <li>FAQs</li>
            <li>Get help</li>
          </ul>
        </Col>
        <Col className="footerList" md={3} sm={6}>
          <h2>Hosting</h2>
          <ul>
            <li>List your car</li>
            <li>Calculator</li>
            <li>All-Star Hosts</li>
            <li>Host tools</li>
            <li>Insurance and protection</li>
            <li>FAQs</li>
          </ul>
        </Col>
      </Row>
    </footer>
  );
}
