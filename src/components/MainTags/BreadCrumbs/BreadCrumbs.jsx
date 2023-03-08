import {Link} from "react-router-dom";
import BreadCrumb from "use-react-router-breadcrumbs";
import {PrADDRESS} from "@/Constant";
import {useEffect, useState} from "react";
import axios from "axios";

export const BreadCrumbs = () => {
    const breadcrumbs = BreadCrumb()
    const last = breadcrumbs[breadcrumbs.length - 1].breadcrumb.props.children
    const beforeLast = breadcrumbs[breadcrumbs.length - 2].breadcrumb.props.children
    let isProductName = false;
    const [name, setName] = useState("");
    if (beforeLast === "Products"){
        isProductName = true;
    useEffect(()=>{
        axios.get(PrADDRESS+"/"+last).then(response => setName(response.data.name))

    }, [])
    }
    return (
        <div>
            <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex gap-2 items-center">
                    {breadcrumbs.map(({ breadcrumb, key }, index, array) => {
                        return(
                        <li className="inline-flex items-center gap-2" key={key}>
                            {index !== 0? <span>/</span>:""}
                            <Link to={key}
                                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                {(isProductName && (index === array.length - 1)) ? name : breadcrumb}
                            </Link>
                        </li>
                    )})}
                </ol>
            </nav>
        </div>
    )
}
