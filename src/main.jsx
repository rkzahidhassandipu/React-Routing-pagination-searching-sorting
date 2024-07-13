import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";

import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import Header from './layout/Header.jsx';
import SingIn from './pages/SingIn.jsx';
// import Profile from './pages/Profile.jsx';
import ProductDetails from './components/ProductDetails.jsx';
import UserProfile from './components/Users/UserProfile.jsx';
import UserOrder from './components/Users/UserOrder.jsx';
import ProtectedRoute from './routes/ProtectedRoute.jsx';
import AdminProfile from './components/Admin/AdminProfile.jsx';
import AdminProducts from './components/Admin/AdminProducts.jsx';
import AdminCategories from './components/Admin/AdminCategories.jsx';
import AdminManageUsers from './components/Admin/AdminManageUsers.jsx';
import AdminRoute from './routes/AdminRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <NotFound />,
    children:[
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singout",
        element: <SingIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/dashboard/user",
        element: <ProtectedRoute />,
        children : [
          {
            path : "profile",
            element : <UserProfile />
          },
          {
            path : "orders",
            element : <UserOrder />
          },
        ]
      },
      {
        path: "/dashboard/admin",
        element: <AdminRoute />,
        children : [
          {
            path : "profile",
            element : <AdminProfile />
          },
          {
            path : "products",
            element : <AdminProducts />
          },
          {
            path : "categories",
            element :  <AdminCategories />
          },
          {
            path : "users",
            element : <AdminManageUsers />
          },
        ]
      },
      {
        path: "/singin",
        element: <SingIn />,
      },
      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
    ]
  },
  
  
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
