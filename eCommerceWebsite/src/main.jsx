import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Signup from './pages/Signup/Signup.jsx'
import Login from './pages/Login/Login.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import WishList from './components/WishList/WishList'
import Cart from './pages/Cart/Cart'
import Error from './pages/Error/Error'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='signup' element={<Signup />} />
      <Route path='login' element={<Login />} />
      <Route path='forgot' element={<ForgotPassword />} />
      <Route path='wishlist' element={<WishList />} />
      <Route path='cart' element={<Cart />} />
      <Route path='*' element={<Error />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
