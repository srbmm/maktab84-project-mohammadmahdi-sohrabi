import {Navigate, useParams} from "react-router-dom";
import {useData} from "@/hooks/index.js";
import {PrADDRESS, ADDRESS} from "@/Constant";
import {MainTheme, RedBtn} from "@/components"
import './Product.css';

export const Product = () => {
    const {id, category} = useParams()
    const [product, add, edit, remove, isFind] = useData(`${PrADDRESS}/${id}`)
    if (isFind) {
        if (product.length === 0 || product?.category === category) {
            const src = `${ADDRESS}/files/${product.picture}`
            return (
                <MainTheme>
                    <div className="flex flex-wrap justify-center text-justify">
                        <div className="flex-grow">
                            <div className="flex justify-center">
                                <img src={src}/>
                            </div>
                        </div>
                        <div className="flex-grow md:w-1/2 flex flex-col gap-6">
                            <h1 className="font-bold">{product.name}</h1>
                            <p className="leading-7">{product.description}</p>
                            <RedBtn to="#" className="w-48 block text-center self-end">افزودن به سبد خرید</RedBtn>
                        </div>
                    </div>
                </MainTheme>
            )
        }else {
            return <Navigate to="/"/>
        }
    } else {
        return <Navigate to="/"/>
    }
}
