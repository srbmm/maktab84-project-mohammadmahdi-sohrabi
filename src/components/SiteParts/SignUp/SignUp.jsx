import {BlueBtn} from "@/components";
import "./SignUp.css"

export const SignUp = ({setIsSignUp}) => {
    return (
        <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300">
            <input className="p-2 border-gray-500 border-b" placeholder="نام کاربری"/>
            <input className="p-2 border-gray-500 border-b" placeholder="رمز"/>
            <input className="p-2 border-gray-500 border-b" placeholder="تکرار رمز"/>
            <BlueBtn>ثبت نام</BlueBtn>
            <button className="text-center" onClick={() => setIsSignUp(false)}>ورود</button>
        </form>
    )
}