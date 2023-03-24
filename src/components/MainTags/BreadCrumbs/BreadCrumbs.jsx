import {Link, useParams, useHref} from "react-router-dom";
import {Category, PrADDRESS, URL} from "@/Constant"
import {useEffect, useState} from "react";
import axios from "axios";
export const BreadCrumbs = () => {
    let addresses = useHref()
    const {category, id} = useParams()
    addresses = addresses.split("/")
    let currentAddress = ""
    const [persianPrName, setPersianPrName] = useState("")
    if (id !== undefined) {
        useEffect(()=>{
            axios.get(PrADDRESS + "/" + id).then((response) => setPersianPrName(response.data.name))
        }, [])
    }
    try {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center bg-gray-200 text-slate-600 gap-2 w-full p-2">
                {addresses.map((item, index) => {
                    currentAddress += item + "/"
                    let res = ""
                    if(item === category && category && category !== "all") res = Category.find(item => item.name === category).persian
                    else if(id === item && id) res = persianPrName
                    else {
                        res = URL[Object.keys(URL).find(url => (URL[url].url === "/" + item) && (item != "" || index == 0))]?.persian
                    }
                    if (res) {
                        return (
                            (index !== addresses.length - 1 ) ?
                            <li className="flex items-center gap-2" key={currentAddress}>
                                {index !== 0 ? "/" : ""}
                                <Link to={currentAddress}>{res}</Link>
                            </li>:<li className="flex items-center gap-2" key={currentAddress}>
                                    {index !== 0 ? "/" : ""}
                                    <Link to="#">{res}</Link>
                                </li>
                        )
                    } else {
                        return ""
                    }
                })}
            </ol>
        </nav>

    )}catch (error) {
        return ""
    }
}