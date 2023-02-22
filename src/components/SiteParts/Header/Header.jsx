import {Basket, TPLink, Profile} from "@/components/index.js";
import logo from "../../../assets/picture/logo.svg"
import {SearchBox} from "@/components/MainTags/SearchBox/index.js";
import "./Header.css"

export const Header = () => {
    return (
        <div className="bg-img">
            <div className="flex justify-around p-5">
                <div className="w-56 flex gap-3 h-5 items-center"><div><Basket /></div> <div><Profile /></div></div>
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
                <div className="w-56"><SearchBox /></div>
            </div>
        </div>
    )
}