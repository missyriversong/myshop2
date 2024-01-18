import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams, Link} from 'react-router-dom'
import {Row, Col, Image, Card, Button, ListGroup} from 'react-bootstrap'
import Rating from '../components/Rating'


const ProductScreen = () => {
  const params = useParams();
  // const product = products.find(p => p._id === params.id)
  const [product, setProduct] = useState({})
  //only want one product*, alos use {} to define singular not array data

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get(`/api/products/${params.id}`)
      setProduct(data)
    }
    fetchProduct()
  })

  //   prior to route change, "s" plural update to product
  //const {data} = await axios.get(`/api/product/${params.id}`) 
  

  return (
    <>
    <Link className='btn btn-dark my-3' to='/'>
      <strong>Go Back</strong>
    </Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>   
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card> 
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col> <strong>${product.price}</strong></Col>
              </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
              </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button className='btn-block' type='button' disabled={product.countInStock === 0}><strong>Add to Cart</strong></Button>
          </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    </>
  )
}

export default ProductScreen