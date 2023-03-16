import {Link, useHref, useNavigate} from "react-router-dom";
import {RedBtn} from "@/components";
import {useCookies} from "react-cookie";

export const HeaderAdmin = () => {
    const addr = useHref()
    const navigate = useNavigate()
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    return (
        <div className="flex gap-4 w-full justify-center p-4 rounded shadow items-center">
            <Link to="/admin/products" className={addr === "/admin/products" ? "underline": ""}>محصولات</Link>
            <Link to="/admin/history" className={addr === "/admin/history" ? "underline": ""}>تاریخچه فروش</Link>
            <RedBtn className="rounded" onClick={()=>{
                removeCookie("auth")
                navigate("/admin")
            }}>خروج</RedBtn>
        </div>
    )
}