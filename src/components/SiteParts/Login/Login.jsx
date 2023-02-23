import {BlueBtn} from "@/components";

export const Login = ({setIsSignUp}) => {
    return (
        <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300">
            <input className="p-2 border-gray-500 border-b" placeholder="نام کاربری"/>
            <input className="p-2 border-gray-500 border-b" placeholder="رمز"/>
            <BlueBtn>ورود</BlueBtn>
            <button className="text-center" onClick={() => setIsSignUp(true)}>ثبت نام</button>
        </form>

    )
}