import React from 'react'
import { Outlet } from 'react-router-dom';
import SingIn from '../pages/SingIn';

const AdminRoute = () => {
  // api call
  // redux-store > user login

  const isSignedIn = true;
  const isAdmin = true;
  return isSignedIn && isAdmin ? <Outlet /> : <SingIn />
}

export default AdminRoute