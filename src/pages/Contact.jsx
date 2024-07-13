import React from 'react';
import { useNavigate } from 'react-router-dom';



const Contact = () => {

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate("/")
  }
  return (
    <div>
      <h1>Welcome to Contact Page</h1>
      <button onClick={handleGoToHome}>Go to Home Page</button>
    </div>
    
  )
}

export default Contact