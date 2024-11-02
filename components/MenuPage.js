import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown, Modal, Form } from 'react-bootstrap';
import './MenuPage.css';

function MenuPage() {
  const [menuItem, setMenuItem] = useState({});
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleOrder = (item) => {
    setMenuItem(item);
    setShowPaymentPage(true);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    console.log('Payment details:', paymentDetails);
    // Add any additional payment processing logic here
    setShowPaymentPage(false); // Hide payment modal after submission
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const menuItems = [
    { id: 1, category: 'Appetizers', name: 'Chicken Soup', price: '₹299', image: '/images/chickensoup.jpg' },
    { id: 2, category: 'Appetizers', name: 'Mutton Soup', price: '₹500', image: '/images/muttonsoup.jpeg' },
    { id: 3, category: 'Appetizers', name: 'Vegetable Soup', price: '₹500', image: '/images/vegsoup.jpg' },
    { id: 4, category: 'Appetizers', name: 'Garlic Bread', price: '₹299', image: '/images/garlicbread.jpg' },
    { id: 5, category: 'Appetizers', name: 'Chicken Cutlets', price: '₹399', image: '/images/chickencutlet.jpg' },
    { id: 6, category: 'Main Courses', name: 'Chicken Biryani', price: '₹300', image: '/images/chickenbiriyani.jpg' },
    { id: 7, category: 'Main Courses', name: 'Beef Biryani', price: '₹300', image: '/images/beefbiriyani.jpeg' },
    { id: 8, category: 'Main Courses', name: 'Mutton Biryani', price: '₹600', image: '/images/muttonbiriyani.jpg' },
    { id: 9, category: 'Main Courses', name: 'Chicken Mandhi', price: '₹360', image: '/images/chickenmandi.jpg' },
    { id: 10, category: 'Main Courses', name: 'Porotta', price: '₹15', image: '/images/porotta.jpg' },
    { id: 11, category: 'Main Courses', name: 'Mutton Curry', price: '₹400', image: '/images/muttoncurry.jpg' },
    { id: 12, category: 'Main Courses', name: 'Chicken Curry', price: '₹60', image: '/images/chickencurry.jpg' },
    { id: 13, category: 'Main Courses', name: 'Beef Dry Fry', price: '₹100', image: '/images/beefdryfry.jpg' },
    { id: 14, category: 'Main Courses', name: 'Beef Curry', price: '₹90', image: '/images/beefcurry.jpg' },
    { id: 15, category: 'Main Courses', name: 'Paneer Curry', price: '₹150', image: '/images/paneercurry.jpg' },
    { id: 16, category: 'Desserts', name: 'Gulab Jamun', price: '₹150', image: '/images/gulabjamun.jpeg' },
    { id: 17, category: 'Desserts', name: 'Ice Cream', price: '₹30/per serving', image: '/images/icecream.jpg' },
    { id: 18, category: 'Desserts', name: 'Cheesecake', price: '₹500', image: '/images/cheesecake.jpg' },
    { id: 19, category: 'Desserts', name: 'Jalebi', price: '₹100', image: '/images/jalebi.jpg' },
    { id: 20, category: 'Desserts', name: 'Rasgulla', price: '₹100', image: '/images/rasgulla.jpg' },
  ];

  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <Container fluid className="menu-page-container mt-5">
      <h2 className="text-center mb-4">Our Menu</h2>
      
      {/* Dropdown for filtering by category */}
      <Dropdown className="text-center mb-4">
        <Dropdown.Toggle variant="secondary">
          {selectedCategory === 'All' ? 'Filter by Category' : selectedCategory}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleSelectCategory('All')}>All</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectCategory('Appetizers')}>Appetizers</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectCategory('Main Courses')}>Main Courses</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelectCategory('Desserts')}>Desserts</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Menu Items */}
      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} className="menu-item-image" />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary" onClick={() => handleOrder(item)}>
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Payment Page Modal */}
      <Modal show={showPaymentPage} onHide={() => setShowPaymentPage(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Details for {menuItem.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlePayment}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={paymentDetails.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={paymentDetails.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={paymentDetails.phone}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={paymentDetails.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Confirm Payment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default MenuPage;
