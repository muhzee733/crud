import React from 'react'
import { useState } from 'react'

const Class = () => {

    const[state, setState] = useState(null);
    const[print, setPrint] = useState(false);
    const change = (val) =>{
        setState(val.target.value);
        setPrint(false)
    }
  return (
    <>
        <div>
            <input type="text"  onChange={change}/>
            <h3>{
                    print ?
                    <p>{state}</p>
                    :null    
                }
            </h3>
        </div>
        <button onClick={()=> setPrint(true)}>Click Me</button>
    </>
  )
}

export default Class
