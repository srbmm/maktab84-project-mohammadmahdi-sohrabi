import {MainTheme} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {resetPay} from "@/store/cardSlice.jsx";

export const PaymentStatus = () => {
    const dispatch = useDispatch()
    const paid = useSelector(state => state.card.paid)
    const [isPaid, setIsPaid] = useState(false);
    useEffect(() => {
        setIsPaid(paid);
        dispatch(resetPay())
    }, []);

    return(
        <MainTheme className="flex justify-center items-center">
            {isPaid ? <h1 className="text-green-600 text-2xl">پرداخت با موفقیت انجام شد.</h1>
                : <h1 className="text-red-600 text-2xl">پرداخت موفقیت آمیز نبود.</h1>}
        </MainTheme>
    )
}