import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, img, price, description} = service;
    const navigate = useNavigate()
    return (
        <div className='service-container text-center' >
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>Price:{price}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Button variant="primary" onClick={() => navigate('/checkout')}>Checkout</Button>
        </Card.Body>
</Card>
        </div>
    );
};

export default Service;