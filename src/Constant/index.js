export const ADDRESS = "http://localhost:3002"
export const PrADDRESS = ADDRESS + "/products"
export const CardADDRESS = ADDRESS + "/finishedCards"
export const Category = [
    {
        name: "tshirt",
        persian: "تی شرت"
    },
    {
        name: "eynak",
        persian: "عینک"
    },
    {
        name: "saat",
        persian: "ساعت"
    },
    {
        name: "kafsh",
        persian: "کفش"
    },
    {
        name: "pirahan",
        persian: "پیراهن"
    },
    {
        name: "kif",
        persian: "کیف"
    }
]
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
    }
}
