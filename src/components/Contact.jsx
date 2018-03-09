import React from 'react';
import image from './../images/travolta.gif';
import {Col, Container, Row} from 'reactstrap';

const Contact = () => 
  <Container>
    <Row>
      <Col sm='12' id="travolta">
        <img src={image}  alt="Awesome alt"/>
      </Col>
    </Row>
  </Container>;


export default Contact;

