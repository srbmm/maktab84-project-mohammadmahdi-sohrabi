import {ProductCard} from "@/components/index.js";

export const ProductGroup = ({products}) => {
    return (
        <div className="p-5 mt-5 flex flex-wrap w-full">
            {products.map(item => <div className="p-2 w-full md:w-1/3"><ProductCard {...item}/></div>)}
        </div>
    )
}