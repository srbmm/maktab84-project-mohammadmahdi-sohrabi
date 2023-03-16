import axios from "axios";
import {useEffect, useState} from "react";
import "./Style.css"
import {BlueBtn} from "@/components";
import {CardADDRESS, PrADDRESS} from "@/Constant/index.js";
export const FinishedCardAdminTag = ({card}) => {
    const [prNames, setPrNames] = useState([]);
    const [mode, setMode] = useState(card.mode);
    useEffect(()=> {
        const temp = []
        card.products.forEach((product) => {
            axios.get(`${PrADDRESS}/${product.id}`).then(response => {
                temp.push(<BlueBtn className="m-1 rounded" to={`../../products/${response.data.category}/${response.data.id}`}>{response.data.name}</BlueBtn>)
                setPrNames([...temp])
            })
        })
    },[])

    return (
        <div className="w-full flex gap-6 items-center h-48 justify-between border-b border-slate-500">
            <div className="flex flex-col">{prNames}</div>
            <h3>{card.telephoneNumber}</h3>
            <h3>{card.postalNumber}</h3>
            <select value={`${mode}`} onChange={e => {
                setMode(e.target.value)
                axios.put(CardADDRESS+"/"+card.id, {...card, mode:e.currentTarget.value}).then(() => {})
            }}>
                <option value="1">پرداخت شده</option>
                <option value="2">ارسال شده</option>
                <option value="3">تحویل داده شده</option>
            </select>
        </div>
    )
}
