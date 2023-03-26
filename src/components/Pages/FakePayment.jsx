import {useForm} from "react-hook-form";
import {BlueBtn, RedBtn} from "@/components";
import {useDispatch, useSelector} from "react-redux";
import {payCard} from "@/store/cardSlice.jsx";
import {useNavigate} from "react-router-dom";


export const FakePayment = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    return (
        <div className="justify-center items-center h-screen">
            <fieldset className="text-center border-t border-black">
                <legend className="p-5"><h1 className="text-2xl">پرداخت</h1></legend>
            </fieldset>
            <form className="flex flex-col justify-center h-screen items-center gap-2" onSubmit={handleSubmit(data => {
                dispatch(payCard())
                navigate("/../payment-status")
            })}>
                <div className="flex flex-col gap-2 w-96"><label>شماره کارت:</label><input
                    className="w-full border-b border-gray-500 p-2" {...register("cardNumber", {
                    required: true,
                    pattern: {value: /^[0-9]{16}$/, message: "شماره کارت را به درستی وارد نکرده اید."}
                })}/></div>
                <div className="text-red-600">{errors?.cardNumber?.message}</div>
                <div className="flex flex-col gap-2 w-96"><label>cvv2:</label><input
                    className="w-full border-b border-gray-500 p-2 w-70" {...register("cvv2", {
                    required: true,
                    pattern: {value: /^[0-9]{3,4}$/, message: "cvv2 را به درستی وارد نکرده اید."}
                })}/></div>
                <div className="text-red-600">{errors?.cvv2?.message}</div>
                <div className="flex flex-col gap-2 w-96"><label>تاریخ:</label>
                    <div className="flex gap-2 w-full">
                        <div className="flex flex-col">
                            <input className="border-b border-gray-500 p-2 w-full" {...register("month", {
                                required: true,
                                pattern: {value: /^([0][0-9]|[1][0-2])$/, message: "ماه را به درستی وارد نکرده اید."}
                            })}/>
                            <div className="text-red-600">{errors?.month?.message}</div>
                        </div>
                        <div className="flex flex-col">
                            <input className="border-b border-gray-500 p-2 w-full" {...register("year", {
                                required: true,
                                pattern: {value: /^[0-9]{2}$/, message: "سال را به درستی وارد نکرده اید."}
                            })}/>
                            <div className="text-red-600">{errors?.year?.message}</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 w-96"><label>رمز دوم:</label><input
                    className="border-b border-gray-500 p-2" {...register("pass", {
                    required: true,
                    pattern: {value: /^[0-9]{5,13}$/, message: "رمز دوم را به درستی وارد نکرده اید."}
                })}/></div>
                <div className="text-red-600">{errors?.pass?.message}</div>
                <div className="flex w-96">
                    <BlueBtn className="w-1/2" type="submit">پرداخت</BlueBtn>
                    <RedBtn className="w-1/2" type onClick={e => {
                        e.preventDefault();
                        navigate("/../payment-status")
                    }}>لغو</RedBtn>
                </div>
            </form>
        </div>
    )
}