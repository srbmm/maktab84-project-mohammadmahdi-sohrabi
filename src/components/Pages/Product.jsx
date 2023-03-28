import {useParams} from "react-router-dom";
import {ADDRESS} from "@/constant/index.js";
import {MainTheme, RedBtn, Loading} from "@/components/index.js"
import {useState} from "react";
import {useLoad} from "@/hooks/index.js";
import {addItem} from "@/store/cardSlice.jsx";
import {useDispatch} from "react-redux";
import {getProduct} from "@/api/index.js";

export const Product = () => {
    const dispatch = useDispatch()
    const {id, category} = useParams()
    const [product, isLoad] = useLoad(getProduct(id), [])
    const src = `${ADDRESS}/${product.picture}`
    const [number, setNumber] = useState(1);
    let str_price = `${(product.price) * number} تومان`
    let discountedPrice = 0
    if (product.discount){
        discountedPrice = `${(product.price*((100-product.discount)/100)) * number} تومان`
    }
    return (
        <MainTheme>
            <Loading isLoad={isLoad} isError={(isLoad) && category !== product?.category}>
                <div className="flex flex-wrap justify-center text-justify">
                    <div className="flex-grow">
                        <div className="flex justify-center">
                            <img src={src}/>
                        </div>
                    </div>
                    <div className="flex-grow md:w-1/2 flex flex-col gap-6">
                        <h1 className="font-bold">{product.name}</h1>
                        <p className="leading-7">{product.description}</p>
                        <div className="flex justify-around">
                            <RedBtn className="w-48 block text-center self-end"
                                    onClick={() => number <= product.number ? dispatch(addItem({
                                        id: product.id,
                                        number
                                    })) : ""}>افزودن به سبد
                                خرید</RedBtn>
                            <span className='line-through text-gray-500 m-1'>{product.discount? str_price:""}</span> <span>{product.discount?discountedPrice:str_price}</span>                            <input type="number" max={product.number} min="1" value={number} onChange={e => {
                                setNumber(+e.currentTarget.value)
                            }}/>
                        </div>
                    </div>
                </div>
            </Loading>
        </MainTheme>
    )


}
