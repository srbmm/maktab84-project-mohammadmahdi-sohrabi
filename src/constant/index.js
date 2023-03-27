export const ADDRESS = "http://localhost:3002"
export const PrADDRESS = ADDRESS + "/products"
export const CardADDRESS = ADDRESS + "/finishedCards"
export const CategoryADDRESS = ADDRESS + "/category"
export const refreshTokenADDRESS = ADDRESS + "/auth/refresh-token"
export const loginADDRESS = ADDRESS + "/auth/login"
export const uploadADDRESS = ADDRESS + "/upload"
export const LimitInPage = 9
export const NumberOfPages = 2
export const URL = {
    home: {
        url: "/",
        persian: "صفحه اصلی"
    },
    auth: {
        url: "/auth",
        persian: "ورود یا ثبت نام"
    },
    card: {
        url: "/card",
        persian: "سبد خرید"
    },
    fakePayment: {
        url: "/fake-payment",
        persian: "درگاه پرداخت"
    },
    paymentStatus: {
        url: "/payment-status",
        persian: "نتیجه پرداخت"
    },
    products:{
        url: "/products",
        persian: "محصولات"
    },
    admin:{
        url: "/admin",
        persian: "مدیریت"
    },
    adminProducts:{
        url: "/admin/products",
        persian: "مدیریت محصولات"
    },
    adminCategory:{
        url: "/admin/category",
        persian: "مدیریت دسته بندی"
    },
    category:{
        url: "/category",
        persian: "دسته بندی"
    },
    history:{
      url: "/history",
      persian: "تاریخچه محصولات"
    },
    adminHistory:{
        url: "/admin/history",
        persian: "تاریخچه"
    },
    product:{
        url: "/products/:category/:id",
        persian: "محصول"
    },
    productsCategory:{
        url: "/products/:category",
        persian: "محصول"
    },
    productsPageCategory:{
        url: "/products/:category/page/:page",
        persian: "محصول"
    },
    productsPage:{
        url: "/products/:category/page/:page",
        persian: "محصول"
    },
    notFound: {
        url: "/not-found",
        persian: "۴۰۴"
    }
}
