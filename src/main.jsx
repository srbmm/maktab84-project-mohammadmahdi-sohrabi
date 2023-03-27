import React from 'react'
import {store} from './store'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import {
    Admin,
    AdminHistory,
    AdminProducts,
    Auth,
    Card,
    FakePayment,
    MainPage, NavigateToCategoryPage, NotFound,
    PaymentStatus,
    Product,
    Products,
    AdminCateogory
} from "@/components";
import './index.css';
import "./assets/fonts/IranYekan/IranYekan.eot"
import "./assets/fonts/IranYekan/IranYekan.ttf"
import "./assets/fonts/IranYekan/IranYekan.woff"
import "./assets/fonts/IranYekan/IranYekan.woff2"
import {
    createBrowserRouter, Navigate,
    RouterProvider
} from "react-router-dom";
import {URL} from "@/constant"
import {ToastContainer} from "react-toastify";

const router = createBrowserRouter([
    {
        path: URL.home.url,
        element: <MainPage/>,
    },
    {
        path: "auth",
        element: <Auth/>,
    },
    {
        path: URL.card.url,
        element: <Card/>,
    },
    {
        path: URL.fakePayment.url,
        element: <FakePayment/>,
    },

    {
        path: URL.paymentStatus.url,
        element: <PaymentStatus/>,
    },
    {
        path: URL.products.url,
        element: <Navigate to={`${URL.products.url}/all/page/1`}/>
    },
    {
        path: URL.admin.url,
        element: <Admin/>,
    },
    {
        path: URL.adminProducts.url,
        element: <AdminProducts/>,
    },
    {
        path: URL.adminHistory.url,
        element: <AdminHistory/>,
    },
    {
        path: URL.adminCategory.url,
        element: <AdminCateogory/>,
    },
    {
        path: URL.product.url,
        element: <Product/>
    },
    {
        path: URL.productsCategory.url,
        element: <NavigateToCategoryPage/>
    },
    {
        path: URL.productsPage.url,
        element: <Products/>
    },
    {
        path: URL.notFound.url,
        element: <NotFound/>
    },
    {
        path: "*",
        element: <Navigate to={URL.notFound.url}/>
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={5}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
