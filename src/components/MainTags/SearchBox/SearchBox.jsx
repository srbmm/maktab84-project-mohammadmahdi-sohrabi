import {BiSearch} from 'react-icons/bi'
import "./SearchBox.css"

export const SearchBox = ({value, onChange}) => {

    return (
        <>
            <div className="flex items-center border-b border-black p-1 w-full">
                <label><BiSearch className="text-search" /></label> <input value={value} onChange={onChange} className="w-full focus:outline-none text-center text-search bg-transparent" placeholder="جستجو کنید..."/>
            </div>
        </>
    )
}