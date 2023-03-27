import {Link} from "react-router-dom";

export const BlueBtn = ({children, className = "", onClick, to="", type}) => {
    className = `border border-my-blue p-2 bg-my-blue hover:bg-white transition ${className}`
    if (to) {
        return (
            <Link className={className} to={to} onClick={onClick}>
                {children}
            </Link>
        );
    } else {
        return (
            <button className={className} type={type} onClick={onClick}>
                {children}
            </button>
        );
    }
};

