import {Navigate, useParams} from "react-router-dom";
import {PrADDRESS, ADDRESS} from "@/Constant";
import {MainTheme, RedBtn} from "@/components"
import './Product.css';
import {useState} from "react";
import {useData} from "@/hooks";
import {addItem} from "@/store/cardSlice.jsx";
import {useDispatch} from "react-redux";

export const Product = () => {
    const dispatch = useDispatch()
    const {id, category} = useParams()
    const [product, add, edit, remove, isFind] = useData(`${PrADDRESS}/${id}`)
    if (isFind) {
        if (product.length === 0 || product?.category === category) {
            const src = `${ADDRESS}/files/${product.picture}`
            const [number, setNumber] = useState(1);
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
                            <div className="flex justify-around">
                                <RedBtn to="#" className="w-48 block text-center self-end" onClick={() => dispatch(addItem({id:product.id, number}))}>افزودن به سبد خرید</RedBtn>
                                <input type="number" max={product.number} min="1" value={number} onChange={e => {
                                    setNumber(+e.currentTarget.value)
                                }}/>
                            </div>
                        </div>
                    </div>
                </MainTheme>
            )
        } else {
            return <Navigate to="/"/>
        }
    } else {
        return <Navigate to="/"/>
    }
}
