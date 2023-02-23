import {BiSearch} from 'react-icons/bi'
import "./SearchBox.css"

export const SearchBox = () => {
    return (
        <>
            <div className="flex items-center border-b border-black p-1">
                <label><BiSearch className="text-search" /></label> <input className="focus: outline-none text-center text-search bg-transparent" placeholder="جستجو کنید..."/>
            </div>
        </>
    )
}