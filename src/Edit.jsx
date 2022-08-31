import React from 'react'
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";


const Edit = () => {
    const {id} = useParams();
    const [input, setInput] = useState({ name: "", email: "", adderss: "" });
    const navigate = useNavigate();
    useEffect(() => {
        try {
            const getSingleRecord = async () =>{
                const res = await axios.get(`http://localhost:8000/posts/${id}`);
                setInput(res.data)
            };
            getSingleRecord();
        } catch (error) {
          console.log(error);
        }
        
      }, [id]);
      const handleEditData = async (e) =>{
        e.preventDefault();
        await axios.put(`http://localhost:8000/posts/${id}`, input);
        navigate("/");

      }

  return (
    <form className="container mt-5" onSubmit={handleEditData}>
        <div className="form-group my-2">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              value={input.name}
          />
        </div>
        <div className="form-group my-2">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email"
            onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              value={input.email}
          />
        </div>
        <div className="form-group my-2">
          <label>Address</label>
          <input
            type="text"
            name="adderss"
            className="form-control"
            placeholder="Address"
            onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              value={input.adderss}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update User
        </button>
      </form>
  )
}

export default Edit
