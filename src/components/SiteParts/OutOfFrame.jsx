import {Link} from "react-router-dom";
import img from "@/assets/picture/styles/style1.jpg"
import {ProductSlider} from "@/components";


export const OutOfFrame = ({products, to, text}) => {
    return (
        <div className="relative">
            <div className="md:border border-black mr-48 ml-48 h-costume-120 mt-5"></div>
            <div className="absolute top-0 pr-44 pl-44 pt-10 w-full">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="bg-white">{text}</div>
                    <Link className="bg-white border-black border p-2 w-48 text-center self-end" to={to}>بیشتر</Link>
                </div>
                <div className="flex items-center justify-center">
                    <img src={img} className="h-80 hidden md:block ml-5"/>
                    <div className="w-3/4">
                        <ProductSlider products={products}/>
                    </div>
                </div>
            </div>
        </div>
    )
}