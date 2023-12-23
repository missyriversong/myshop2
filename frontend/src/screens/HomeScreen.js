import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Product from '../components/Product'
import {Col, Row} from 'react-bootstrap'

const HomeScreen = () => {
  const [products, setProducts] = useState([])  //default data type is array

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')  //wait to get data from api
      setProducts(data)   //then set data, stored in state
    }
    fetchProducts();
  })

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