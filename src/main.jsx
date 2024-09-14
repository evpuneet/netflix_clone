import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home.jsx'
import Productsec from './pages/Productsec.jsx'
import Login from './pages/Login.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from './pages/Register.jsx'
import Productdeatil from './pages/Productdeatil.jsx'
import NOTfound from './pages/NOTfound.jsx'

let router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Home/>,
    },
    {
      path:'/cart',
      element:<Cart/>,
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/login',
      element:<Login/>,
    },
    {
      path:'/register',
      element:<Register/>,
    },
    {
      path:'/error',
      element:<NOTfound/>,
    },
    {
      // this is the dynamic routing
      path:'/product-detail/:id',
      element:<Productdeatil/>,
    }

  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
