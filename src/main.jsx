import React from 'react'
import ReactDOM from 'react-dom/client'
import {Auth, Card, FakePayment, MainPage, PaymentStatus, Product, Products} from "@/components";
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />  },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        path: "/card",
        element: <Card />,
    },
    {
        path: "/fake-payment",
        element: <FakePayment />,
    },

    {
        path: "/payment-statue",
        element: <PaymentStatus />,
    },
    {
        path: "/product",
        element: <Product />,
    },
    {
        path: "/products",
        element: <Products />,
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
