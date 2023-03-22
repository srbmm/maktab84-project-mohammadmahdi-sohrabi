import {Basket, TPLink, Profile, SearchBox} from "@/components/index.js";
import logo from "@/assets/picture/logo.svg"
import "./Header.css"
import {Link, useHref} from "react-router-dom";
import {URL} from "@/Constant"
import {Navbar} from "flowbite-react/lib/esm/components/Navbar";
export const Header = () => {
    const hoverLinkClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
    const normalLinkClass = "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
    const address = useHref()
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
                    <div className="w-96"><SearchBox/></div>
                </div>
            </div>
            <div className="md:hidden"><Navbar
                fluid={true}
                rounded={true}
            >
                <Link to="/" className="bg-gray-400 p-2 rounded"><img src={logo}/></Link>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <SearchBox />
                    <li>
                        <Link to={`${URL.products.url}`}
                           className={address === `${URL.products.url}`?hoverLinkClass:normalLinkClass}>همه محصولات</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/tshirt/page/1`}
                              className={address === `${URL.products.url}/tshirt/page/1`?hoverLinkClass:normalLinkClass}>تی شرت</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/eynak/page/1`}
                              className={address === `${URL.products.url}/eynak/page/1`?hoverLinkClass:normalLinkClass}>عینک</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/saat/page/1`}
                              className={address === `${URL.products.url}/saat/page/1`?hoverLinkClass:normalLinkClass}>ساعت</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/kafsh/page/1`}
                              className={address === `${URL.products.url}/kafsh/page/1`?hoverLinkClass:normalLinkClass}>کفش</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/pirahan/page/1`}
                              className={address === `${URL.products.url}/pirahan/page/1`?hoverLinkClass:normalLinkClass}>پیراهن</Link>
                    </li>
                    <li>
                        <Link to={`${URL.products.url}/kif/page/1`}
                              className={address === `${URL.products.url}/kif/page/1`?hoverLinkClass:normalLinkClass}>کیف</Link>
                    </li>
                </Navbar.Collapse>
            </Navbar>
            </div>

        </>
    )
}