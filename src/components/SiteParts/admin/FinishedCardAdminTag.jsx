import axios from "axios";
import {useEffect, useState} from "react";
import "./Style.css"
import {BlueBtn} from "@/components";
import {PrADDRESS} from "@/Constant/index.js";
export const FinishedCardAdminTag = ({products,telephone, userID, post}) => {
    const [prNames, setPrNames] = useState([]);
    useEffect(()=> {
        const temp = []
        products.forEach((product) => {
            axios.get(`${PrADDRESS}/${product.id}`).then(response => {
                temp.push(<BlueBtn className="m-1 rounded" to={`../../products/${response.data.category}/${response.data.id}`}>{response.data.name}</BlueBtn>)
                setPrNames([...temp])
            })
        })
    },[])

    return (
        <div className="w-full flex gap-6 items-center h-48 justify-between">
            <h3>{userID}</h3>
            <h3>{prNames}</h3>
            <h3>{telephone}</h3>
            <h3>{post}</h3>
        </div>
    )
}
// react table