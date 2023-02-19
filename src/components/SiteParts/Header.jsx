import {TPLink} from "@/components";
import logo from "./../../assets/picture/logo.svg"
import {BsPersonFill} from "react-icons/bs"

export const Header = () => {
    return (
        <>
            <div className="flex justify-between">
                <div>search</div>
                <div className="flex flex-col items-center">
                    <div className="bg-gray-400 p-2 rounded"><img src={logo}/></div>
                    <div className="border-b border-black w-80 m-6"></div>
                    <div className="flex gap-7 c">
                        <TPLink to="auth"/>
                        <TPLink to="auth"/>
                        <TPLink to="auth"/>
                        <label className="font-300">|</label>
                        <TPLink to="auth"/>
                        <TPLink to="auth"/>
                        <TPLink to="auth"/>
                    </div>
                </div>
                <div><BsPersonFill /></div>
            </div>
        </>
    )
}