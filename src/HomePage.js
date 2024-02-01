// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <div className="homepage">
      <Container>
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1>Welcome to Canteen Management System</h1>
            <p>Manage your canteen operations efficiently with our system.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;
