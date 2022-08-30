import React from 'react'
import { useState } from 'react'

const Profile = () => {

    const[login, setlogin] = useState(false);

  return (
    <div>
        {
            login? <h1>Ali</h1> : <h1>Basit</h1>
        }
    </div>

  )
}

export default Profile