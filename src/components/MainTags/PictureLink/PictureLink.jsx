import "./PictureLink.css"
import {Link} from "react-router-dom";

export const PictureLink = ({img,text,to="#"}) => {
    return (
        <Link className="relative w-full" to={to}>
            <div className="relative img-hover-zoom--blur">
                <img src={img} className='w-full'/>
            </div>
            <div className="absolute bottom-0 right-0 bg-gray-200 p-3 text-xl text-slate-600">{text}</div>
        </Link>
    )
}