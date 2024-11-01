// src/components/ReservationManagement.js
import React from 'react';
import { Container, Row, Col, Card, Table} from 'react-bootstrap';

function ReservationManagement() {
  return (
    <Container fluid className="reservation-management-container mt-5">
      <h2 className="text-center mb-4">Reservation Management</h2>
      
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Reservation ID</th>
                    <th>Customer Name</th>
                    <th>Reservation Date</th>
                    <th>Time</th>
                    <th>Number of Guests</th>
                    <th>Status</th>
                    <th>Actions</th>
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

export default ReservationManagement;