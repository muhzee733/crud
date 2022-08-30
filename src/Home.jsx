import React from 'react'
import {useState, useEffect } from 'react';
import axios from "axios";

export const Home = () => {

  const[user, setUser] = useState([]);

  useEffect(() => {
    try{
          const getAllData = async() =>{
            const res = await axios.get('http://localhost:8000/posts');
            setUser(res.data)
            console.log(user)
          }
          getAllData();
    }catch(error){
      console.log(error)
    }
  }, []);
  

  return (
    <>
      <form className='container'>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  placeholder="Enter email" /> 
  </div>
  <div className="form-group">
    <label>Name</label>
    <input type="text" className="form-control" placeholder="Name" />
  </div>
  <button type="submit" className="btn btn-primary">Add User</button>
</form>

<table className="table container">
  <thead>
    <tr>
      <th>ID</th>
      <th>Email</th>
      <th>Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
    </tr>
  </tbody>
</table>
    </>
  )
}
