import {BlueBtn, MainTheme} from "@/components";
import {useForm} from "react-hook-form";
import axios from "axios";
import {ADDRESS} from "@/Constant";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setTrue} from "@/store/authSlice.jsx";

export const Auth = ({setCookie, login}) => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <MainTheme className="flex justify-center items-center">
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={0}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300" onSubmit={handleSubmit(data => {
                axios.post(ADDRESS + "/auth/login", {
                    username: data.username,
                    password: data.password
                }).then(response => {
                    setCookie('auth',response.data)
                    toast.success('با موفقیت وارد شدید', {
                        position: "bottom-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    dispatch(setTrue())
                }).catch(err => {
                    console.log(err)
                    toast.error('نام کاربری یا رمز عبور اشتباه می باشد.', {
                        position: "bottom-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
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