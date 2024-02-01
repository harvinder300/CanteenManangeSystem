// ContactUs.js
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function ContactUs() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactUs;
