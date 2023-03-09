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
import './index.css';
import "./assets/fonts/IranYekan/IranYekan.eot"
import "./assets/fonts/IranYekan/IranYekan.ttf"
import "./assets/fonts/IranYekan/IranYekan.woff"
import "./assets/fonts/IranYekan/IranYekan.woff2"
import {
    createBrowserRouter, Navigate,
    RouterProvider, useParams
} from "react-router-dom";
import {URL} from "@/Constant"

const router = createBrowserRouter([
    {
        path: URL.home.url,
        element: <MainPage />,
    },
    {
        path: "auth",
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
        element: <Navigate to={`${URL.products.url}/all/page/1`} />
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
    },
    {
        path: URL.productsCategory.url,
        element: () => {
            const {category} = useParams()
            return <Navigate to={`${URL.products.url}/${category}/page/1`} />
        }
    },
    {
        path: URL.productsPage.url,
        element: <Products />
    },
    {
        path: "*",
        element: <Navigate to="/"/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}  />
  </React.StrictMode>,
)
