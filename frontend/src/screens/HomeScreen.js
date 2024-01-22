import React, {useEffect} from 'react'   //, useState}
import { useDispatch, useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
// import axios from 'axios'
import Product from '../components/Product.js'
import { listProducts } from '../actions/productActions.js'
import Loader from '../components/Loader.js'
import Message from '../components/Message.js'

const HomeScreen = () => {
  // const [products, setProducts] = useState([])  //default data type is array
  // now being stored in Redux

  const dispatch = useDispatch()
  useEffect(() => {
    // const fetchProducts = async () => {
    //   const {data} = await axios.get('/api/products')  //wait to get data from api
    //   setProducts(data)   //then set data, stored in state
    // }
    // fetchProducts();

    dispatch(listProducts()) 
    }, [dispatch])

  const productList = useSelector((state) => state.productList)
  const {loading, products, error} = productList

  return (
    <>

    <h1> Latest Products 2023</h1>
    {
       loading ? (<Loader/>) : 
       error ? (<Message variant='danger'>{error}</Message>) : 
        (<Row> 
          {products.map(p => (     //add in { }if more than 1 line code
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p}/></Col>
          ))}
        </Row>)
      }
      
    </>
    )
  }

export default HomeScreen