import {Link, useHref} from "react-router-dom";
import {PrADDRESS} from "@/Constant";
import {useEffect, useState} from "react";
import axios from "axios";
import {URL} from "@/Constant"

export const BreadCrumbs = () => {
    let address = useHref()
    if (address === "/") {
        address = ['']
    } else {
        address = address.split("/")
    }
    const last = address[address.length - 1]
    const bLast = address[address.length - 2]
    const bbLast = address[address.length - 3]
    let mode = "";
    const [data, setData] = useState({});
    if ("/" + bLast === URL.products.url) {
        mode = "category"
        axios.get(PrADDRESS + "?category=" + bLast).then(response => setData(response.data))
    } else if ("/" + bbLast === URL.products.url) {
        mode = "product"
        useEffect(() => {
            axios.get(PrADDRESS + "/" + last).then(response => setData(response.data))
        }, [])
    }
    let current = ""
    return (
        <div>
            <nav
                className="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Breadcrumb">
                <ol className="inline-flex gap-2 items-center">
                    {address.map((addr, index, array) => {
                        let res = ""
                        current = current + `${addr}/`
                        if (mode && ((index === array.length - 1) || (index === array.length - 2))) {
                            if (index === array.length - 1) {
                                if(mode === "product"){
                                    res = data.name
                                }else if (mode === "category"){
                                    res = data[0].persianCategory
                                }
                            }else if (index === array.length - 2 && mode === "product"){
                                res = data.persianCategory
                            }
                        }else{
                            res = URL[Object.keys(URL).find(key => URL[key].url === "/" + addr)].persian
                        }
                        return (
                            <li className="inline-flex items-center gap-2" key={current}>
                                {(index) !== 0?<span>/</span>:''}
                                <Link to={current}
                                      className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    {res}
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </div>
    )
}
