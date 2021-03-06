import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import 'bootstrap';

import { Container, Row, Col, Card } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import BuyPage from './components/BuyPage';
import Cart from './components/Cart';

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    // Check if the item is already in the cart
    const isAlreadyAdded = cartItem.findIndex(function (array) {
      return array.id === item.id;
    });

    if (isAlreadyAdded != -1) {
      return toast('already added in cart', { type: 'error' });
    }

    setCartItem([...cartItem, item]);
  };

  const buyNow = () => {
    setCartItem([]);
    return toast('Purchase Complete', { type: 'success' });
  };

  const removeItem = item => {
    setCartItem(cartItem.filter(e => e.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md={8}>
          <BuyPage addInCart={addInCart} />
        </Col>
        <Col md={4}>
          <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
