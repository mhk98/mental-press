import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate()
    return (
        <div className='w-50 mx-auto'>
       <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Address</Form.Label>
    <Form.Control type="text" placeholder="Enter your address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Enter your phone number" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={() => navigate('/thankYou')}>
    Submit
  </Button>
</Form>
        </div>
    );
};

export default Checkout;