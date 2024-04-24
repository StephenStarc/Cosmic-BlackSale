import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
;
import Home from './pages/home/Home.jsx';
import Cart from './pages/cart/Cart.jsx';
import NoPage from './pages/nopage/NoPage.jsx';
import Order from './pages/order/Order.jsx';
import State from './context/data/State.jsx';
import Login from './pages/registation/Login.jsx';
import Signup from './pages/registation/Signup.jsx';
import ProductInfo from './pages/productInfo/ProductInfo.jsx';
import Dashboard from './pages/admin/dashboard/Dashboard.jsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux'
import AddProduct from './pages/admin/pages/AddProduct.jsx';
import UpdateProduct from './pages/admin/pages/UpdateProduct.jsx';
import { store } from './redux/store.jsx';
import 'react-toastify/dist/ReactToastify.css'
import { Navigate } from "react-router-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import AllProducts from './pages/allproducts/Allproducts.jsx';

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'stephenstarc01@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

const router = createBrowserRouter([
  {path: "/",element: <Home />},
  {path: "order",element: <ProtectedRoutes><Order /></ProtectedRoutes>},
  {path: "cart",element: <Cart />},
  {path: "login",element: <Login />},
  {path: "signup",element: <Signup/>},
  {path: "allproducts",element: <AllProducts/>},
  {path: "dashboard",element: <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>},
  {path: "productinfo/:id",element: <ProductInfo />},
  {path: "addproduct",element: <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>},
  {path: "updateproduct",element: <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>},
  {path: "/*",element: <NoPage />},
]);

const initialOptions = {
  clientId: "ARIm9ATVNA2Qs-YXjE3hBp-2WIsOdmweHF9rrhDuEXW2Is0PE4TIyPbHHBVbJkWXUF9FkzbNwwf7wJ7I",
  currency: "USD",
  intent: "capture",
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PayPalScriptProvider options={initialOptions}>
  <Provider store={store}>
  <State><ToastContainer /><RouterProvider router={router} /></State>
  </Provider>
  </PayPalScriptProvider>
  </React.StrictMode>,
)

