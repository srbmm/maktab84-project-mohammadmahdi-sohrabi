import {RiShoppingBasketFill} from "react-icons/ri"
import "./Basket.css"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
export const Basket = () => {
    const cards = useSelector(state => state.card.products)
    return (
        <Link to="/card"
                className="relative inline-flex items-center text-sm text-center justify-center">
            <RiShoppingBasketFill className="text-lg"/>
            {cards.length?
                <div className="absolute inline-flex justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -right-4 dark:border-gray-900">
                    {cards.length}</div>:""}
        </Link>
    )
}