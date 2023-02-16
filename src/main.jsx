import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Main</h1>,
    },
    {
        path: "/auth",
        element: <h1>Auth</h1>,
    },
    {
        path: "/card",
        element: <h1>Card</h1>,
    },
    {
        path: "/fake-payment",
        element: <h1>Payment</h1>,
    },

    {
        path: "/payment-statue",
        element: <h1>PaymentStatus</h1>,
    },
    {
        path: "/product",
        element: <h1>Product</h1>,
    },
    {
        path: "/products",
        element: <h1>Products</h1>,
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
