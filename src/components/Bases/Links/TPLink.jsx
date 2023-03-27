import { Link } from "react-router-dom";

export const TPLink = ({to, children}) =>{
    return(
        <Link className="font-normal hover:font-semibold" to={to}>{children}</Link>
    )
}