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
import {URL} from "@/Constant"
import './index.css'
import {
    createBrowserRouter,
    RouterProvider, useMatch,
} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: URL.home.url,
        element: <MainPage />  },
    {
        path: URL.auth.url,
        element: <Auth />,
    },
    {
        path: URL.card.url,
        element: <Card />,
    },
    {
        path: URL.fakePayment.url,
        element: <FakePayment />,
    },

    {
        path: URL.paymentStatus.url,
        element: <PaymentStatus />,
    },
    {
        path: URL.products.url,
        element: <Products />,
    },
    {
        path: URL.admin.url,
        element: <Admin />,
    },
    {
        path: URL.adminProducts.url,
        element: <AdminProducts />,
    },
    {
        path: URL.adminHistory.url,
        element: <AdminHistory />,
    },
    {
        path: URL.product.url,
        element: <Product />
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
