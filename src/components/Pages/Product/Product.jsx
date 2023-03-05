import {Navigate, useParams} from "react-router-dom";
import {useData} from "@/hooks/index.js";
import ADDRESS from "@/ADDRESS.js";
import {MainTheme} from "@/components"
import './Product.css';

export const Product = () => {
    const {id} = useParams()
    const [product, add, edit, remove, isFind] = useData(`${ADDRESS}/products/${id}`)
    if (isFind) {
        const src = `../src/assets/picture/products/${product.picture}`
        return(
            <MainTheme>
                <div className="flex flex-wrap">
                    <div className="flex-grow">
                        <div>
                            <img src={src}/>
                        </div>
                    </div>
                    <div className="flex-grow md:w-1/2">
                        <h1>{product.name}</h1>
                        <h1>{product.description}</h1>
                    </div>
                </div>
            </MainTheme>
        )
    } else {
        return <Navigate to="/"/>
    }
}
