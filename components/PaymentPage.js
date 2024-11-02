// src/components/PaymentPage.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function PaymentPage({ menuItem, onHide }) {
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handlePayment = (event) => {
    event.preventDefault();
    // Process payment details here
    console.log('Payment details:', paymentDetails);
    onHide();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  return (
    <Container fluid className="payment-page-container mt-5">
      <h2 className="text-center mb-4">Payment Details</h2>
      
      <Row>
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Body>
              <Form onSubmit={handlePayment}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={paymentDetails.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={paymentDetails.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="phone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={paymentDetails.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={paymentDetails.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Pay Now
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PaymentPage;