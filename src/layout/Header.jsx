import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
  const [issignIn, setIssignIn] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("userData") && JSON.parse(localStorage.getItem("userData"));;
    setIssignIn(userData.isSignedIn)
  }, []);

  const handleSignOut = () => {
    setIssignIn(false);
    localStorage.setItem("isSignIn", JSON.stringify(true));
  }

  return (
    <>
      <header className='navbar'>
          <div className='navbar-brand'>
              <Link to="/">MyApp</Link>
          </div>
          <nav className='navbar-links'>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  {issignIn && <>
                    <li><Link to="/singout" onClick={handleSignOut}>SingOut</Link></li>
                  </>}
                  {!issignIn && <>
                    <li><Link to="/singin">SingIn</Link></li>
                  </>}
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/about">About</Link></li>
              </ul>
          </nav>
      </header>
      <ToastContainer />
      <Outlet />
    </>
  )
}

export default Header;