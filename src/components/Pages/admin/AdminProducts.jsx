import {BlueBtn, HeaderAdmin, MainTheme, ProductAdminTag, SearchBox} from "@/components";
import { useData } from "@/hooks"
import {useState} from "react";
export const AdminProducts = () => {
    const [data, add, edit, remove] = useData(`http://localhost:3000/products`);
    const [search, setSearch] = useState("")
    const filteredData = search ? data.filter(product => product.name.includes(search)) : data
    const products = filteredData.map(product => <ProductAdminTag name={product.name} category={product.category} price={product.price} number={product.number} picture={product.picture} />)
    // for(let i = 1; i <= 3; i++) {
    //     pages.push(<BlueBtn onClick={()=> setPage(i)}>{i}</BlueBtn>)
    // }
    return (
        <MainTheme>
            <HeaderAdmin/>
            <SearchBox value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="m-10">
                {...products}
            </div>
        </MainTheme>
    )
}