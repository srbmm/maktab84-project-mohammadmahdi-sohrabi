import {MainTheme} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {payCard, reset, resetPay} from "@/store/cardSlice.jsx";
import {addCard} from "@/api/index.js";
import axios from "axios";
import {PrADDRESS} from "@/constant/index.js";
import {toast} from "react-toastify";

export const PaymentStatus = () => {
    const dispatch = useDispatch()
    const card = useSelector(state => state.card)
    const paid = useSelector(state => state.card.paid)
    const [isPaid, setIsPaid] = useState(false);
    let isSendRequest = false
    useEffect(() => {
        if(paid && !isSendRequest){
            addCard({...card, mode: 1, paid: undefined}).then(response => {
                    card.products.forEach(product => {
                        axios.get(PrADDRESS + "/" + product.id).then(response => axios.put(PrADDRESS + "/" + product.id, {
                            ...response.data,
                            number: (response.data.number - product.number)
                        }))
                    })
                    dispatch(payCard())
                    dispatch(reset())
                }
            ).catch(err => toast.error("خطا در پرداخت"))
            dispatch(resetPay())
            isSendRequest = true
        }
        setIsPaid(paid);
    }, []);
    return(
        <MainTheme className="flex justify-center items-center">
            {isPaid ? <h1 className="text-green-600 text-2xl">پرداخت با موفقیت انجام شد.</h1>
                : <h1 className="text-red-600 text-2xl">پرداخت موفقیت آمیز نبود.</h1>}
        </MainTheme>
    )
}