import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { CartContext } from '../Pages/CartContext';

const Cart = (props) => {
  const {product} = props;
  const {Cart, setCart} = useContext(CartContext);

  const addToCart = (event, product) => {
    event.preventDefault();
    console.log(product);
    let _cart = {...Cart}

    if (!_cart.item){
      _cart.item = {}
    }
    if (_cart.item[product.id]){
        _cart.item[product.id] += 1;
    }
    else{
      _cart.item[product.id] = 1;
    }
    if(!_cart.totalItems){
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);  }


  return (
    <>
      <Link to={`/shop/${product.id}`}>
      <div className='box'>
                <img src={product.img} alt='pizza'></img>
                <h3>{product.name}</h3>
                <p>Small</p>
                <div className='price'>
                    <p>${product.price}</p>
                    <button onClick={(e) => {addToCart(e, product)}}>Cart</button>
                </div>
        </div>
      </Link>
    </>
  )
}

export default Cart