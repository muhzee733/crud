import React from 'react'
import { useEffect } from 'react';
import { useState, useContext } from 'react'
import Cart from '../Components/Cart'
import axios from "axios";
import {CartContext} from '././CartContext';

const Shop = () => {
    const {name} = useContext(CartContext);
    const [product, setProduct] = useState([]);
    useEffect(() =>{
            const getAllData = async() => {
                const res = await axios.get('http://localhost:8000/product');
                setProduct(res.data);
            }  
            getAllData();
        }, []);

  return (
    <div className="container">
        <h1>Product {name}</h1>
        <div className='container pt-5'>
        <div className='products'>
        {
            product.map((product) =>(
                <Cart
                    key={product.id}
                    product={product}
                />
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default Shop