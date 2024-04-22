import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/layout/Layout.jsx';
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import Dashboard from './pages/admin/Dashboard.jsx';
import NoPage from './pages/nopage/NoPage.jsx';
import Order from './pages/order/Order.jsx';
import State from './context/data/State.jsx';
import Login from './pages/registation/Login.jsx';
import Signup from './pages/registation/Signup.jsx';
import ProductInfo from './pages/productInfo/ProductInfo.jsx';

const router = createBrowserRouter([
  {path: "/",element: <Home />},
  {path: "order",element: <Order />},
  {path: "cart",element: <Cart />},
  {path: "login",element: <Login />},
  {path: "signup",element: <Signup/>},
  {path: "dashboard",element: <Dashboard />},
  {path: "productinfo/:id",element: <ProductInfo />},
  {path: "/*",element: <NoPage />},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <State><RouterProvider router={router} /></State>
   
  </React.StrictMode>,
)
