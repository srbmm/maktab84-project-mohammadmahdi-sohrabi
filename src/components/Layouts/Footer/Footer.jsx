import {FooterMenu} from "@/components";
import {AiOutlineInstagram, CiTwitter, TbBrandTelegram} from "react-icons/all";
import {Link} from "react-router-dom";
import enamad from "@/assets/picture/namad/enamad.png"
import samandehi from "@/assets/picture/namad/samandehi.png"
import kasbokar from "@/assets/picture/namad/kasbokar.png"

const footer1 = {
    title: "لباس",
    links: [
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"},
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"}
    ]
}

const footer2 = {
    title: "لباس",
    links: [
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"},
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"}
    ]
}

const footer3 = {
    title: "لباس",
    links: [
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"},
        {to: "#", name: "بچگانه"},
        {to: "#", name: "مردانه"}
    ]
}

export const Footer = () => {
    return (
        <div className="m-5 md:pr-56 md:pl-56">
            <div>
                <div className="flex justify-between">
                    <FooterMenu data={footer1}/>
                    <FooterMenu data={footer2}/>
                    <FooterMenu data={footer3}/>
                    <div className="flex flex-col gap-3">
                        <p className="text-lg">تلفن پشتیبانی: ۶۱۹۳۰۳۰۰-۰۲۱</p>
                        <div className="flex justify-between text-lg">
                            <Link to="#"><AiOutlineInstagram/></Link>
                            <Link to="#"><TbBrandTelegram/></Link>
                            <Link to="#"><CiTwitter/></Link>
                        </div>
                    </div>
                </div>
                <div className="mt-4 mt-4 pb-4 border-slate-300 border-b">
                    <Link to="#">دانلود اپلیکیشن دیجی استایل</Link>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div>
                        <h4>فروشگاه اینترنتی مد و لباس دیجی‌استایل</h4>
                        <p className="text-gray-500">دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت
                            تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود.
                            در
                            دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس
                            بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست
                            کامل
                            از جدیدترین‌ برندهای معتبر را بخرید.</p>
                    </div>
                    <div className="flex justify-center gap-4 m-4">
                        <Link to="#" className="border-gray-300 border p-4 w-28"><img src={samandehi} className="object-cover"/></Link>
                        <Link to="#" className="border-gray-300 border p-4 w-28"><img src={kasbokar} className="object-cover"/></Link>
                        <Link to="#" className="border-gray-300 border p-4 w-28"><img src={enamad} className="object-cover"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}