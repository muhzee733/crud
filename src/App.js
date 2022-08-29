
import React from 'react'
import data from './data';
import './App.css';
import { useState, useEffect } from 'react';

const App = (Value) => {
  const [pro,setPro]=useState([]);
  const [model, setModel] = useState(false);
  const [add, setAddPopup] = useState(false);
  // Add User
  const [name, setName] = useState('');

  useEffect(()=>{
    setPro(data)
    
    },[]);

// Popup
  const dataEdit = () =>{
      setModel(!model);
  }
  const addUser = () =>{
    setAddPopup(!add);
  }
  // Function
  const userNewUser = () =>{
    console.log(name)
  } 

  const deletUser = (id) =>{
    console.log(id)
  }

  return (
    <>
    <button onClick={addUser}>Add User</button>
    <table>
      <tr>
        <th>id:</th>
        <th>Name</th>
        <th>Edu</th>
        <th>Edit</th>
        <th>Delet</th>
        <th>Update</th>
      </tr>

      {
        data.map((val, i) =>(
          <>
            <tr key={i}>
              <td key={i}>{val.id}</td>
              <td>{val.name}</td>
              <td>{val.edu}</td>
              <td><button onClick={dataEdit}>Edit</button></td>
              <td><button onClick={() => deletUser(val.id)}>Delete</button></td>
              <td><button>Update</button></td>
            </tr>
          </>
        ))
      }

      </table>
      {
        model && (
          <div className='model'>
            <h1>Edit Querry</h1>
            <tr>
              <td>Id:</td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><button>Update</button></td>
            </tr>
          </div>
        )
      }
      {
        add && (
          <div className='addUser'>
            <h1>Add User</h1>
            <tr>
              <td><input value={name} type="text" onChange={(e) => setName(e.target.value)}/></td>
              <td><input type="text" /></td>
              <td><button onClick={userNewUser}>Add User</button></td>
            </tr>
          </div>
        )
      }

  </>
  )
}

export default App
