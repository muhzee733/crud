
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams  } from 'react-router-dom';

const SingleProduct = () => {
    const[product, setProduct] = useState(null);
    const params = useParams();

    useEffect(() =>{
        fetch(`http://localhost:8000/product/${params.id}`)
        .then(res => res.json())
        .then(product => {
            setProduct(product);
        })
    },[params]);

    
  return (
    product ? ( 
      <>

    <div className='box'>
      
    <img src={product.img} alt='pizza'></img>
            <h3>{product.name}</h3>
            <p>Small</p>
            <div className='price'>
                <p>${product.price}</p>
                <button >Cart</button>
            </div>
    </div>
      </>
    ) : <div> 404 error</div>
    
  )
}

export default SingleProduct