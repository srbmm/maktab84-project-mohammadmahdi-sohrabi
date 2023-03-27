import logo from "@/assets/picture/logo.svg";
import {Link} from "react-router-dom";

export const SimpleHeader = () => {
    return (
        <div className="flex justify-center items-center shadow-md w-full">
            <Link to="/" className="bg-gray-400 p-2 rounded m-2"><img src={logo}/></Link>
        </div>
    )
}