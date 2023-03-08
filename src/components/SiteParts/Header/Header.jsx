import {Basket, TPLink, Profile} from "@/components/index.js";
import logo from "@/assets/picture/logo.svg"
import {SearchBox} from "@/components/MainTags/SearchBox/index.js";
import "./Header.css"
import {Link} from "react-router-dom";
import {Navbar} from "flowbite-react/lib/esm/components/Navbar";
export const Header = () => {
    return (
        <>
            <div className="w-full dir-rtl hidden md:block">
                <div className="flex justify-around p-5">
                    <div className="w-56 flex gap-3 h-5 items-center">
                        <div><Basket/></div>
                        <div><Profile/></div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Link to="/" className="bg-gray-400 p-2 rounded"><img src={logo}/></Link>
                        <div className="border-b border-black w-80 m-6"></div>
                        <div className="flex gap-7 c">
                            <TPLink to="auth">صفحه اصلی</TPLink>
                            <TPLink to="auth">test</TPLink>
                            <TPLink to="auth">test</TPLink>
                            <label className="font-300">|</label>
                            <TPLink to="auth">test</TPLink>
                            <TPLink to="auth">test</TPLink>
                            <TPLink to="auth">test</TPLink>
                        </div>
                    </div>
                    <div className="w-56"><SearchBox/></div>
                </div>
            </div>
            <div className="md:hidden"><Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand>
                    <Link to="\" className="bg-gray-400 hover:bg-gray-300 rounded p-2"><img src={logo}/></Link>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Navbar.Link
                        href="/"
                        active={true}
                    >
                        صفحه اصلی
                    </Navbar.Link>
                    <Navbar.Link to="/navbars" >
                        test
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        test
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        test
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        test
                    </Navbar.Link>
                    <Navbar.Link href="/navbars">
                        test
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </>
    )
}