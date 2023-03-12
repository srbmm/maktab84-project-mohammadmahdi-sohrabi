import {Basket, TPLink, Profile} from "@/components/index.js";
import logo from "@/assets/picture/logo.svg"
import {SearchBox} from "@/components/MainTags/SearchBox/index.js";
import "./Header.css"
import {Link} from "react-router-dom";
import {URL} from "@/Constant"
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
                            <TPLink to={`${URL.products.url}`}>همه محصولات</TPLink>
                            <TPLink to={`${URL.products.url}/tshirt/page/1`}>تی شرت</TPLink>
                            <TPLink to={`${URL.products.url}/eynak/page/1`}>عینک</TPLink>
                            <label className="font-300">|</label>
                            <TPLink to={`${URL.products.url}/saat/page/1`}>ساعت</TPLink>
                            <TPLink to={`${URL.products.url}/kafsh/page/1`}>کفش</TPLink>
                            <TPLink to={`${URL.products.url}/pirahan/page/1`}>پیراهن</TPLink>
                            <TPLink to={`${URL.products.url}/kif/page/1`}>کیف</TPLink>
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