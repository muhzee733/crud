import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const Home = () => {
  const [user, setUsers] = useState([]);
  const [input, setInput] = useState({ name: "", email: "", adderss: "" });
  const [render, setRender] = useState(false);
  const [querry, setQuerry] = useState('');

  useEffect(() => {
    try {
      const getAllData = async () => {
        const res = await axios.get("http://localhost:8000/posts");
        setUsers(res.data);
      };
      getAllData();
    } catch (error) {
      console.log(error);
    }
  }, [render]);
  // Search 
  const inputEvent = (event) =>{
    const data = event.target.value;
    setQuerry(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/posts", input);
    setRender();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/posts/${id}`);
    const newUsers = user.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
  };
  const handleEdit = () => {};

  return (
    <>
      <form className="container mt-5" onSubmit={handleSubmit}>
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
          Add User
        </button>
      </form>

      <table className="table container mt-5">
        <>
        <input type="text"  placeholder="Filter" className="filter" onChange={inputEvent} />
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td> Email</td>
            <td>Address</td>
            <td>Action</td>
          </tr>
          {user &&
            user.filter(user => user.name.toLowerCase().includes(querry)).map((val) => (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
                <td>{val.adderss}</td>
                <td>
                  <button className="btn btn-info" onClick={() => handleDelete(val.id)}>Delete</button>
                  <Link to={`/edit/${val.id}`}>
                    <button className="btn btn-danger" onClick={() => handleEdit(val.id)}>Edit</button>
                  </Link>
                </td>
              </tr>
            ))}
        </>
      </table>
    </>
  );
};
