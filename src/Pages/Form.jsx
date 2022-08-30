import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[name, setName] = useState('');
    const[tnc, setTnc] = useState(false);
    const[interest, setInterest]= useState("");

    function getFormData(e)
    {
        console.log(name, tnc, interest);
        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={getFormData}>
            <input type="text" placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/><br />
            <select onChange={(e)=> setInterest(e.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select><br />
            <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)} /> <span>Accept Privacy Policy</span><br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
