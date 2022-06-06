import React from 'react';
import { Card } from 'react-bootstrap';
import mohsin from '../../../images/mohsin.png'

const About = () => {
    return (
        <div className='mt-5'>
            <Card className='d-block mx-auto text-center' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={mohsin} />
  <Card.Body>
    <Card.Title>Md. Mohsin Kabir</Card.Title>
    <Card.Text>
    Hi! This is Md. Mohsin Kabir. Now I am really hardworking to become a successful Fullstack Developer. After 6 months I want to make myself a professional Web Developer. For this reason, I am working 6-8 hours a day after my office hours.
    </Card.Text>
  </Card.Body>
</Card>
        </div>
    );
};

export default About;