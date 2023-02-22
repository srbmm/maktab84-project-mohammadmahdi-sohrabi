import {RiShoppingBasketFill} from "react-icons/ri"
import "./Basket.css"
export const Basket = () => {
    return (
        <button type="button"
                className="relative inline-flex items-center text-sm text-center justify-center">
            <RiShoppingBasketFill className="text-lg"/>
            <span className="sr-only">Notifications</span>
            <div
                className="absolute inline-flex justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -right-4 dark:border-gray-900">20
            </div>
        </button>
    )
}