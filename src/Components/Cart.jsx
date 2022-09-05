import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  const {product} = props;

  const addToCart = (event, product) => {
    event.preventDefault();
    console.log(product);
  }

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