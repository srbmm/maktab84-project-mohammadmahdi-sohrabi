import {BlueBtn, HeaderAdmin, MainTheme} from "@/components";
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Admin = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    if (isLogin) {
        return (
            <MainTheme>
                <HeaderAdmin/>
                <div>
                </div>
            </MainTheme>
        )
    } else {
        return (
            <MainTheme className="flex justify-center">
                <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300">
                    <input className="p-2 border-gray-500 border-b" placeholder="نام کاربری" value={user}
                           onChange={event => setUser(event.target.value)}/>
                    <input className="p-2 border-gray-500 border-b" placeholder="رمز" value={pass}
                           onChange={event => setPass(event.target.value)}/>
                    <BlueBtn className="w-full" onClick={(e) => {
                        e.preventDefault();
                        if(user === "admin" && pass === "admin") setIsLogin(true)
                        else toast("نام کاربری یا رمز اشتباه است.", {type: toast.TYPE.ERROR})
                    }}>ورود</BlueBtn>
                </form>
                <ToastContainer rtl/>
            </MainTheme>
        )
    }
}
