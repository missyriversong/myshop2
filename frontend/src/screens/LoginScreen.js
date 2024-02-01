import React, {useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message.js'
import Loader from '../components/Loader.js'
import { login } from '../actions/userActions.js'
import FormContainer from '../components/FormContainer.js'   
import {Form, Button, Row, Col} from 'react-bootstrap'

const LoginScreen = () => {
  const location = useLocation()  //read optional parameters

  const navigate = useNavigate()
  const dispatch = useDispatch()

  
  const redirect = location.search ? location.search.split('=')[1] : '/' 
  
  const userLogin = useSelector((state) => state.userLogin)
  const {loading, error, userInfo} = userLogin

  const [email, setEmail] = useState('')    //form
  const [password, setPassword] = useState('')   //form

  
  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
    }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault() 
    dispatch(login(email, password))
  }



  return (
    <>
    <FormContainer>
      <h1>Signin</h1>
      {error && <Message variant='danger'>{error}</Message>}

      {loading && <Loader/>}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='enter email' value={email} onChange={(e) => setEmail(e.target.value)}>
          </Form.Control>
        </Form.Group>

          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
          
        <Button type='submit' variant='primary'>Sign in</Button>
      </Form>

      <Row className='py-3'>
        <Col>
        New Customer? {' '}
        <Link to={redirect ? `/register?redirect=${redirect}` : `/register`}>
          register
          </Link>
        </Col>
      </Row>
    </FormContainer>


    </>
  )
}

export default LoginScreen