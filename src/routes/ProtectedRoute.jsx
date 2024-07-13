import React from 'react'
import { Outlet } from 'react-router-dom';
import SingIn from '../pages/SingIn';

const ProtectedRoute = () => {
  // api call
  // redux-store > user login
  const userData = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"));
  return userData.isSignedIn ? <Outlet /> : <SingIn />
}

export default ProtectedRoute