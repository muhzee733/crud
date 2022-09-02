import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
  return (
    <>
      <Link to={`/shop/${props.product.id}`}>
      <div className='box'>
                <img src={props.product.img} alt='pizza'></img>
                <h3>{props.product.name}</h3>
                <p>Small</p>
                <div className='price'>
                    <p>${props.product.price}</p>
                    <button>Cart</button>
                </div>
        </div>
      </Link>
    </>
  )
}

export default Cart