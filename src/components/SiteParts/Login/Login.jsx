import {BlueBtn} from "@/components";

export const Login = ({setIsSignUp, userValue, passValue, userChange, passChange}) => {
    return (
        <form className="flex flex-col gap-6 w-96 p-10 border border-gray-300">
            <input className="p-2 border-gray-500 border-b" placeholder="نام کاربری" value={userValue} onChange={userChange}/>
            <input className="p-2 border-gray-500 border-b" placeholder="رمز" value={passValue} onChange={passChange}/>
            <BlueBtn className="w-full">ورود</BlueBtn>
            <button className="text-center" onClick={() => setIsSignUp(true)}>ثبت نام</button>
        </form>

    )
}