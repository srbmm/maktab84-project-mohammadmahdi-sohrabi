import {BiSearch} from 'react-icons/bi'

export const SearchBox = () => {
    return (
        <>
            <div className="flex items-center border-b border-black p-1">
                <label><BiSearch className="text-gray-500" /></label> <input className="focus: outline-none text-center" placeholder="جستجو کنید..."/>
            </div>
        </>
    )
}