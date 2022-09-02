
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const[product, setProduct] = useState(null);
    const params = useParams();
    
    useEffect(() =>{
        fetch(`http://localhost:8000/product/${params.id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
            console.log(product)
        })
    },[params])

  return (
    product ? ( 
    
    <div className='box'>
    <img src="public/img/img1.jpg" alt='pizza'></img>
            <h3>{product.name}</h3>
            <p>Small</p>
            <div className='price'>
                <p>$20</p>
                <button>Cart</button>
            </div>
    </div>
    ) : <div> 404 error</div>
    
  )
}

export default SingleProduct