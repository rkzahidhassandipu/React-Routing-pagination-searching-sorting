import React from 'react'
import { useLocation } from 'react-router-dom'

const UserProfile = () => {
    const {state} = useLocation();

  return (
    <div className='profileContainer'>
        {state ? <>
            <h2>User Profile</h2>
            <div className="profileInfo">
                <p><span className='profileLabel'>Name: </span>{state.name}</p>
                <p> <span className='profileLabel'>Email: </span>{state.email}</p>
                <p><span className='profileLabel'>City: </span>{state.city}</p>
                <p> <span className='profileLabel'>Country: </span>{state.country}</p>
            </div>
        </>: <p>No Profile exists</p>}

        
    </div>
  )
}

export default UserProfile