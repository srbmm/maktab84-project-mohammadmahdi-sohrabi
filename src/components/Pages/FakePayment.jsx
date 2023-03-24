import {useForm} from "react-hook-form";
import {BlueBtn, RedBtn} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {payCard, reset} from "@/store/cardSlice.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {CardADDRESS, PrADDRESS} from "@/Constant/index.js";
import {toast} from "react-toastify";


export const FakePayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const card = useSelector(state => state.card)
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    return (
        <div>
            <form className="flex flex-col justify-center items-center h-screen gap-2" onSubmit={handleSubmit(data =>{
                axios.post(CardADDRESS,{...card, id:Math.floor(Math.random()*100000000), mode: 1, paid:undefined}).then(response =>{
                    card.products.forEach(product => {
                        axios.get(PrADDRESS+"/"+product.id).then(response => axios.put(PrADDRESS + "/" + product.id, {...response.data, number: (response.data.number - product.number)}))
                    })
                    dispatch(payCard())
                    dispatch(reset())
                    navigate("/../payment-status")
                    }
                ).catch(err => toast.error("خطا در پرداخت"))
            })}>
                <div className="flex items-center justify-between gap-2 w-96"><label>شماره کارت:</label><input className="border-b border-gray-500 p-2" {...register("cardNumber",{required:true,pattern:{value:/[0-9]{16}/,message:"شماره کارت را به درستی وارد نکرده اید."}})}/></div>
                <div className="text-red-600">{ errors?.cardNumber?.message }</div>
                <div className="flex items-center justify-between gap-2 w-96"><label>cvv2:</label><input className="border-b border-gray-500 p-2" {...register("cvv2",{required:true,pattern:{value:/[0-9]{3,4}/,message:"cvv2 را به درستی وارد نکرده اید."}})}/></div>
                <div className="text-red-600">{ errors?.cvv2?.message }</div>
                <div className="flex items-center justify-between gap-2 w-96"><label>تاریخ:</label><input className="border-b border-gray-500 p-2" {...register("date",{required:true,pattern:{value:/[0-9]{2}\/[0-9]{2}/,message:"تاریخ را به درستی وارد نکرده اید."}})}/></div>
                <div className="text-red-600">{ errors?.date?.message }</div>
                <div className="flex items-center justify-between gap-2 w-96"><label>رمز دوم:</label><input className="border-b border-gray-500 p-2" {...register("pass",{required:true,pattern:{value:/[0-9]{5,13}/,message:"رمز دوم را به درستی وارد نکرده اید."}})}/></div>
                <div className="text-red-600">{ errors?.pass?.message }</div>
                <div className="flex w-96">
                    <BlueBtn className="w-1/2" type="submit">پرداخت</BlueBtn>
                    <RedBtn className="w-1/2" type onClick={e =>{
                        e.preventDefault();
                        navigate("/../payment-status")
                    }}>لغو</RedBtn>
                </div>
            </form>
        </div>
    )
}