// src/MenuPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';

function MenuPage() {
  const menuItems = [
    {
      id: 1,
      category: 'Appetizers',
      name: 'Bruschetta',
      price: '$6.99',
      image: '/images/pexels-mumtahina-tanni-1080117-6260921.jpg'
    },
    {
      id: 2,
      category: 'Appetizers',
      name: 'Garlic Bread',
      price: '$4.99',
      image: '/images/garlic-bread.jpg'
    },
    {
      id: 3,
      category: 'Main Courses',
      name: 'Spaghetti Bolognese',
      price: '$12.99',
      image: '/images/spaghetti-bolognese.jpg'
    },
    {
      id: 4,
      category: 'Desserts',
      name: 'Cheesecake',
      price: '$5.99',
      image: '/images/cheesecake.jpg'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter items based on the selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container className="mt-5">
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
      
      <Row>
        {filteredItems.map((item) => (
          <Col key={item.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default MenuPage;
