import {Link, useHref, useNavigate} from "react-router-dom";
import {BlueBtn, RedBtn} from "@/components";
import {URL} from "@/constant"
import {setFalse} from "@/store/authSlice.jsx";
import {useDispatch} from "react-redux";

export const HeaderAdmin = ({addCat}) => {
    const addr = useHref()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <div className="flex gap-4 w-full justify-center p-4 rounded shadow items-center">
            <Link to={URL.adminProducts.url} className={addr === URL.adminProducts.url ? "underline": ""}>محصولات</Link>
            <Link to={URL.adminCategory.url} className={addr === URL.adminCategory.url ? "underline": ""}>دسته بندی</Link>
            <Link to={URL.adminHistory.url} className={addr === URL.adminHistory.url ? "underline": ""}>تاریخچه فروش</Link>
            <RedBtn className="rounded" onClick={()=>{
                localStorage.removeItem("auth")
                dispatch(setFalse())
                navigate("/admin")
            }}>خروج</RedBtn>
        </div>
    )
}