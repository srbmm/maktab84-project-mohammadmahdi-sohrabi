import {Link} from "react-router-dom";

export const HeaderAdmin = () => {
    return (
        <div className="flex gap-4 w-full justify-center p-4 rounded shadow">
            <Link to="/admin/products">محصولات</Link>
            <Link to="/admin/history">تاریخچه فروش</Link>
        </div>
    )
}