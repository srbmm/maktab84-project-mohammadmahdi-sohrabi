import {BiSearch} from 'react-icons/bi'
import "./SearchBox.css"
import {useState} from "react";
import {getProducts} from "@/api/index.js";
import {ErrorBoundary} from "@/components";
import {Link} from "react-router-dom";
import {URL, ADDRESS} from "@/constant"

export const SearchBox = ({value}) => {
    const [result, setResult] = useState([]);
    return (
        <div className="relative">
            <div className="flex items-center border-b border-black p-1 w-full">
                <label><BiSearch className="text-search"/></label> <input value={value} onChange={e => {
                if (e.target.value.trim()) {
                    getProducts({
                        search: {
                            key: 'name',
                            value: e.target.value
                        }
                    }).then(response => setResult(response.data.map(product => <Link
                        className="flex gap-1 items-center p-2 hover:bg-gray-500"
                        to={`${URL.products.url}/${product.category}/${product.id}`}>
                        <img src={`${ADDRESS}/${product.picture}`} className="max-h-16 rounded"/><p>{product.name}</p></Link>))
                    )
                }else{
                    setResult([])
                }
            }} className="w-full focus:outline-none text-center text-search bg-transparent"
                                                                          placeholder="جستجو کنید..."/>
            </div>

            <ErrorBoundary>
                {result.length !== 0 ?
                    <div className="absolute bg-gray-300 max-h-56 w-full flex flex-col gap-1 overflow-auto rounded-b">
                        {...result}
                    </div> : ""
                }
            </ErrorBoundary>
        </div>
    )
}