import {Navigate, useParams} from "react-router-dom";
import {useData} from "@/hooks/index.js";
import {PrADDRESS, ADDRESS} from "@/Constant";
import {MainTheme} from "@/components"
import './Product.css';

export const Product = () => {
    const {id, category} = useParams()
    const [product, add, edit, remove, isFind] = useData(`${PrADDRESS}/${id}`)
    console.log(product)
    if (isFind) {
        if (product.length === 0 || product?.category === category) {
            const src = `${ADDRESS}/files/${product.picture}`
            return (
                <MainTheme>
                    <div className="flex flex-wrap">
                        <div className="flex-grow">
                            <div className="flex justify-center">
                                <img src={src}/>
                            </div>
                        </div>
                        <div className="flex-grow md:w-1/2">
                            <h1 className="font-bold">{product.name}</h1>
                            <h1>{product.description}</h1>
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
