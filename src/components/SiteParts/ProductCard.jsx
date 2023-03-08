import {Card} from "flowbite-react";

export const ProductCard = ({img,price,discount}) => {
    let price_discounted
    if ()
    return (<Card className="w-full md:w-1/3">
        <div className="relative bg-gray-300 p-5 rounded flex justify-center">
            <div className="absolute top-0 right-0 bg-slate-200 p-2 rounded-bl rounded-tr">category</div>
            <img src={img} className="rounded h-56 md:h-full"/>
            {discount ? <div className="absolute bottom-0 left-0 bg-black text-white p-2 rounded-bl rounded-tr">{discount}%</div> : ""}
        </div>
        <h3>نام محصول</h3>
        <p className="text-left">
            {discount ? <span className="line-through text-gray-500 m-1">
                300 تومان
                    </span>:            price تومان
            }

        </p>
    </Card>)
}