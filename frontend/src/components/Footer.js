import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
    <Container>
    <Row>
      <Col className="text-center">
    &copy; JBShop 2023
    </Col>
    </Row>
  </Container>
</footer>
  )
}

export default Footer