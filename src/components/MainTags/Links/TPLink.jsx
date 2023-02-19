import { Link } from "react-router-dom";

export const TPLink = (attr) =>{
    return(
        <Link className="font-normal hover:font-semibold" {...attr}>Test</Link>
    )
}