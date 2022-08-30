import React from 'react'
import { useState } from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(true);

  return (
    <div>
        {
            show? <p>Heloo</p> : null
        }
        <button onClick={()=> setShow(true)}>Show</button>
        <button onClick={()=> setShow(false)}>hide</button>

        <button onClick={()=> setShow(!show)}>Toggle</button>
    </div>
  )
}

export default ShowHide
