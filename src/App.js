import React, { useState, useEffect } from 'react';
import Crud from './Crud';
import {Routes, Route} from "react-router-dom";
import Text from './Pages/Text';
import { Home } from './Home';
import Class from './Pages/Class';
import ShowHide from './Pages/ShowHide';
import Form from './Pages/Form';
import Profile from './Pages/Profile';
import Edit from './Edit';
import LifeCycle from './LifeCycle';
import Shop from './Pages/Shop';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import Navbar from './Navbar';
import { CartContext } from './Pages/CartContext';


const App = () => {
  const [cart, seCart] = useState({});
  useEffect(() => {
    const cart = window.localStorage.getItem('cart');

  }, [])
  
  return (
    <div>
      <Navbar />
      <CartContext.Provider value={{cart}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/shop/:id" element={<SingleProduct />} />
          <Route path="/text" element={<Text />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/class" element={<Class />} />
          <Route path="/showhide" element={<ShowHide />} />
          <Route path="/form" element={<Form />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/life" element={<LifeCycle />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </CartContext.Provider>
    </div>
  )
}

export default App
