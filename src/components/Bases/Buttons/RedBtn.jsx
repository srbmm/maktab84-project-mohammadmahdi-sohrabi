import {Link} from "react-router-dom";

export const RedBtn = ({children, className = "", onClick, to="", disabled}) => {
    className = `border border-my-red p-2 disabled:bg-red-500 bg-my-red hover:bg-white transition ${className}`
    if (to) {
        return (
            <Link className={className} to={to} onClick={onClick}>
                {children}
            </Link>
        );
    } else {
        return (
            <button disabled={disabled} className={className} onClick={onClick}>
                {children}
            </button>
        );
    }
};

