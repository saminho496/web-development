// src/MenuPage.js

import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';
import './MenuPage.css';
function MenuPage() {
  const menuItems = [
    {
      id: 1,
      category: 'Appetizers',
      name: 'chicken soup',
      price: '₹299',
      image: '/images/chickensoup.jpg'
    },
    {
      id: 2,
      category: 'Appetizers',
      name: 'mutton soup',
      price: '₹500',
      image: '/images/muttonsoup.jpeg'
    },
    {
      id: 3,
      category: 'Appetizers',
      name: 'vegetable soup',
      price: '₹500',
      image: '/images/vegsoup.jpg'
    },
    {
      id: 4,
      category: 'Appetizers',
      name: 'garlic bread',
      price: '₹299',
      image: '/images/garlicbread.jpg'
    },
    {
      id: 5,
      category: 'Appetizers', // Updated category name to 'starters',
      name: 'chicken cutlets',
      price: '₹399',
      image: '/images/chickencutlet.jpg'
    },
    {
      id: 6,
      category: 'Main Courses',
      name: 'chicken biriyani',
      price: '₹300',
      image: '/images/chickenbiriyani.jpg'
    },
    {
      id: 7,
      category: 'Main Courses',
      name: 'beef biriyani',
      price: '₹300',
      image: '/images/beefbiriyani.jpeg'
    },
    {
      id: 8,
      category: 'Main Courses',
      name: 'mutton biriyani',
      price: '₹600',
      image: '/images/muttonbiriyani.jpg'
    },
    {
      id: 9,
      category: 'Main Courses',
      name: 'chicken mandhi',
      price: '₹360',
      image: '/images/chickenmandi.jpg'
    },
    {
      id: 10,
      category: 'Main Courses',
      name: 'Porotta',
      price: '₹15',
      image: '/images/porotta.jpg'
    },
    {
      id: 11,
      category: 'Main Courses',
      name: 'mutton curry',
      price: '₹400',
      image: '/images/muttoncurry.jpg'
    },
    {
      id: 12,
      category: 'Main Courses',
      name: 'Chicken Curry',
      price: '₹60',
      image: '/images/chickencurry.jpg'
    },
    {
      id: 13,
      category: 'Main Courses',
      name: 'Beef Dry Fry',
      price: '₹100',
      image: '/images/beefdryfry.jpg'
    },
    {
      id: 14,
      category: 'Main Courses',
      name: 'Beef Curry',
      price: '₹90',
      image: '/images/beefcurry.jpg'
    },
    {
      id: 15,
      category: 'Main Courses',
      name: 'Paneer Curry',
      price: '₹150',
      image: '/images/paneercurry.jpg'
    },
    {
      id: 16,
      category: 'Desserts',
      name: 'gulab jamun',
      price: '₹150',
      image: '/images/gulabjamun.jpeg'
    },
    {
      id: 17,
      category: 'Desserts',
      name: 'Ice Cream',
      price: '₹30/per serving',
      image: '/images/icecream.jpg'
    },
    {
      id: 18,
      category: 'Desserts',
      name: 'Cheesecake',
      price: '₹500',
      image: '/images/Cheesecake.jpg'
    },
    {
      id: 19,
      category: 'Desserts',
      name: 'Jalebi',
      price: '₹100',
      image: '/images/jalebi.jpg'
    },
    {
      id: 20,
      category: 'Desserts',
      name: 'Rasgulla',
      price: '₹100',
      image: '/images/Rasgulla.jpg'
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
