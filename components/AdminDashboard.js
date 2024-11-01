// src/components/AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <Container fluid className="admin-dashboard-container mt-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      
      <Row>
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Menu Management</Card.Title>
              <Card.Text>Add, update, and remove menu items.</Card.Text>
              <Link to="/menu">
                <Button variant="primary">Go to Menu</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Order Management</Card.Title>
              <Card.Text>View and update order statuses.</Card.Text>
              <Link to="/orders">
                <Button variant="primary">Go to Orders</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6} lg={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Reservation Management</Card.Title>
              <Card.Text>View and update reservation statuses.</Card.Text>
              <Link to="/reservations">
                <Button variant="primary">Go to Reservations</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;