import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    Admin,
    AdminHistory,
    AdminProducts,
    Auth,
    Card,
    FakePayment,
    MainPage,
    PaymentStatus,
    Product,
    Products
} from "@/components";
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
        path: "/products",
        element: <Products />,
    },
    {
        path: "/admin",
        element: <Admin />,
    },
    {
        path: "/admin/products",
        element: <AdminProducts />,
    },
    {
        path: "/admin/history",
        element: <AdminHistory />,
    },
    {
        path: "/products/:id",
        element: <Product />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
