import React from 'react'
import products from '../products'
import Product from '../components/Product'
import {Col, Row} from 'react-bootstrap'

const HomeScreen = () => {
  return (
    <>
    <h1> Latest Products 2023</h1>
    <Row>
      {products.map(p => (     //add in { }if more than 1 line code
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={p}/></Col>
      ))
      }
    </Row>
    </>
  )
}

export default HomeScreen