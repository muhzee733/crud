import React from 'react';
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

const App = () => {
  return (
    <div>
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
        </Routes>
    </div>
  )
}

export default App
