// src/components/OrderHistory.js
import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';

function OrderHistory() {
  const orders = [
   
  ];

  return (
    <Container fluid className="order-history-container mt-5">
      <h2 className="text-center mb-4">Order History</h2>
      
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="card-title">Recent Orders</h5>
              <ListGroup variant="flush">
                {orders.map((order) => (
                  <ListGroup.Item key={order.id} className="order-item">
                    <Row>
                      <Col md={6}>
                        <h6 className="order-item-heading">Order #{order.id}</h6>
                        <p className="order-item-subheading">{order.customerName}</p>
                        <p className="order-item-subheading">{order.orderDate}</p>
                      </Col>
                      <Col md={3}>
                        <p className="order-item-subheading">{order.total}</p>
                      </Col>
                      <Col md={3}>
                        <p className="order-item-subheading">{order.status}</p>
                      </Col>
                      <Col md={12}>
                        <Button variant="primary" className="btn-view-order">View Order</Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderHistory;