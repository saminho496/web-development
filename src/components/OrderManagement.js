// src/components/OrderManagement.js
import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

function OrderManagement() {
  return (
    <Container fluid className="order-management-container mt-5">
      <h2 className="text-center mb-4">Order Management</h2>
      
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Total</th>
                    <th>Status</th>
                  </tr>
                </thead>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OrderManagement;