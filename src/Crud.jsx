import React from 'react'
import data from './data';
import './App.css';
import { useState, useEffect } from 'react';

const Crud = (Value) => {
  const [pro,setPro]=useState([]);
  const [model, setModel] = useState(false);
  const [add, setAddPopup] = useState(false);
  // Add User
  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

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
    setItems((oldItem) => {
      return[ ...oldItem, name];
    })
    setName("");
  } 
  const itemEvent = (e) =>{
    setName(e.target.value)
  }


  const deleteItems = (id) =>{
    console.log("delete");
    setItems((oldItem) =>{
      return oldItem.filter((arrElem, index) =>{
        return index !== id;
      })
    })
    
  }

  return (
    <>
    <button onClick={addUser}>Add User</button>
    <table>
      <tr>
        <th>Name</th>
        <th>Edit</th>
        <th>Delet</th>
        <th>Update</th>
      </tr>

      {
        items.map((val, index) =>(
          <>
            <tr key={index} id={index} >
              <td>{val}</td>
              <td><button onClick={dataEdit}>Edit</button></td>
              <td><button onClick={deleteItems}>Delete</button></td>
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
              <td><input value={name} type="text" onChange={itemEvent}/></td>
              <td><button onClick={userNewUser}>Add User</button></td>
              {/* <div>
                  {
                    items.map((val) =>(
                      <li>{val}</li>
                    ))
                  }
              </div> */}
            </tr>
          </div>
        )
      }

  </>
  )
}

export default Crud;
