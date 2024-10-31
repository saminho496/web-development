// src/components/Dashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Dashboard.css';

function Dashboard() {
  return (
    <Container fluid className="dashboard-container mt-5">
      <h2 className="text-center mb-4">Restaurant Management Dashboard</h2>
      
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Order Management</Card.Title>
              <Card.Text>Manage all orders, view current orders, and update order statuses.</Card.Text>
              <Button variant="primary">Go to Orders</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Menu Management</Card.Title>
              <Card.Text>Update menu items, adjust prices, and add new dishes to the menu.</Card.Text>
              <Button variant="primary">Manage Menu</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Reservations</Card.Title>
              <Card.Text>View, create, and manage customer reservations.</Card.Text>
              <Button variant="primary">Manage Reservations</Button>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Inventory Management</Card.Title>
              <Card.Text>Monitor inventory levels, place orders, and track stock.</Card.Text>
              <Button variant="primary">Manage Inventory</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Staff Management</Card.Title>
              <Card.Text>Manage staff roles, schedules, and performance tracking.</Card.Text>
              <Button variant="primary">Manage Staff</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Reports</Card.Title>
              <Card.Text>View reports on sales, popular dishes, and other performance metrics.</Card.Text>
              <Button variant="primary">View Reports</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
