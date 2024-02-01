import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import CartScreen from './screens/CartScreen.js';
import LoginScreen from './screens/LoginScreen.js';

const App = () => {
  return (
  <>
  <Router>
    <Header/>
    <main>
    <Container>
    <Routes>
          <Route path="/" exact element={<HomeScreen/>} />
          <Route path="/product/:id" element={<ProductScreen/>} />
          <Route path="/cart" element={<CartScreen/>} />
          <Route path="/cart/:id" element={<CartScreen/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
    </Container>
    </main>
    <Footer/>
    </Router>
  </>

  );
}

export default App;
