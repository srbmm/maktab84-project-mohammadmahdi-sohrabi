import {Link, useHref} from "react-router-dom";
import {PrADDRESS} from "@/Constant";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "@/Constant"
export const BreadCrumbs = () => {
    const address = useHref().split("/")
    const last = address[address.length - 1]
    const beforeLast = address[address.length - 2]
    let isProductName = false;
    const [name, setName] = useState("");
    if ("/" + beforeLast === URL.products.url){
        isProductName = true;
    useEffect(()=>{
        axios.get(PrADDRESS+"/"+last).then(response => setName(response.data.name))
    }, [])
    }
    let current = ""
    return (
        <div>
            <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex gap-2 items-center">
                    {address.map((addr, index, array) => {
                        current = current + "/" + addr
                        return(
                        <li className="inline-flex items-center gap-2" key={current}>
                            {index !== 0? <span>/</span>:""}
                            <Link to={current}
                                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                {(isProductName && (index === array.length - 1)) ? name : URL[Object.keys(URL).find(key => {
                                    return URL[key].url === "/" + addr
                                })].persian}
                            </Link>
                        </li>
                    )})}
                </ol>
            </nav>
        </div>
    )
}
