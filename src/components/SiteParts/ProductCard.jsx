import {Card} from "flowbite-react";
import {Link} from "react-router-dom";
import {URL, ADDRESS} from "@/Constant"

export const ProductCard = ({picture,price,discount,name,category,persianCategory,id}) => {
    let str_price = `${price} تومان`
    let discountedPrice = 0
    if (discount){
        discountedPrice = `${price*((100-discount)/100)} تومان`
    }
    const link = `${URL.products.url}/${category}/${id}`
    return (<Card key={id}>
        <div className="relative bg-gray-300 p-5 rounded flex justify-center">
            <div className="absolute top-0 right-0 bg-slate-200 p-2 rounded-bl rounded-tr">{persianCategory}</div>
            <Link to={link}><img src={`${ADDRESS}/files/${picture}`} className="rounded h-56 object-cover"/></Link>
            {discount ? <div className="absolute bottom-0 left-0 bg-black text-white p-2 rounded-bl rounded-tr">{discount}%</div> : ""}
        </div>
        <Link to={link}><h3>{name}</h3></Link>
        <p className="inline-flex items-center justify-end">
            <span className='line-through text-gray-500 m-1'>{discount? str_price:""}</span> <span>{discount?discountedPrice:str_price}</span>
        </p>
    </Card>)
}