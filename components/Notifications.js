// src/components/Notifications.js
import React from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import './Notifications.css';

function Notifications() {
  const notifications = [
   
    
  ];

  return (
    <Container fluid className="notifications-container mt-5">
      <h2 className="text-center mb-4">Notifications</h2>
      
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <h5 className="card-title">Recent Notifications</h5>
              <ul className="notifications-list">
                {notifications.map((notification) => (
                  <li key={notification.id} className="notification-item">
                    <p className="notification-message">{notification.message}</p>
                    <p className="notification-timestamp">{notification.timestamp}</p>
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Notifications;