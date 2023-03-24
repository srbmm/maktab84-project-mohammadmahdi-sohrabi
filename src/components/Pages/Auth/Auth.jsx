import {BlueBtn, MainTheme} from "@/components";
import {useForm} from "react-hook-form";
import axios from "axios";
import {ADDRESS} from "@/Constant";
import {toast} from "react-toastify";
import {useDispatch} from "react-redux";
import {setTrue} from "@/store/authSlice.jsx";

export const Auth = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    return (
        <MainTheme className="flex justify-center items-center">
            <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300" onSubmit={handleSubmit(data => {
                axios.post(ADDRESS + "/auth/login", {
                    username: data.username,
                    password: data.password
                }).then(response => {
                    localStorage.setItem('auth',JSON.stringify(response.data))
                    dispatch(setTrue())
                }).catch(err => {
                    toast.error('نام کاربری یا رمز عبور اشتباه می باشد.');
                })
            })}>
                <input className="p-2 border-gray-500 border-b"
                       placeholder="نام کاربری" {...register("username", {required: true})}/>
                <input className="p-2 border-gray-500 border-b" placeholder="رمز"
                       type="password" {...register("password", {required: true})}/>
                <BlueBtn className="w-full" type="submit">ورود</BlueBtn>
            </form>
        </MainTheme>

    )
}