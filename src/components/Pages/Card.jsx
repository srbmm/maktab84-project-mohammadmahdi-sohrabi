import {BlueBtn, MainTheme, RedBtn, TPLink} from "@/components";
import {useEffect, useState} from "react";
import axios from "axios";
import {PrADDRESS} from "@/Constant/index.js";
import {useSelector, useDispatch} from "react-redux";
import {removeItem, telephoneNumberChange, postalNumberChange} from "@/store/cardSlice.jsx"
import {Table} from "flowbite-react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

export const Card = () => {
    const navigate = useNavigate()
    const cards = useSelector(state => state.card.products)
    const [products, setProducts] = useState([]);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    useEffect(() => {
        const temp = []
        cards.forEach((product) => {
            axios.get(`${PrADDRESS}/${product.id}`).then(response => {
                temp.push(<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <TPLink
                            to={`/../products/${response.data.category}/${response.data.id}`}>{response.data.name}</TPLink>
                    </Table.Cell>
                    <Table.Cell>
                        <TPLink
                            to={`/../products/${response.data.category}`}>{response.data.persianCategory}</TPLink>
                    </Table.Cell>
                    <Table.Cell>
                        {response.data.price * ((100-response.data.discount)/100)} تومان
                    </Table.Cell>
                    <Table.Cell>
                        {product.number}
                    </Table.Cell>
                    <Table.Cell>
                        {product.number * response.data.price * ((100-response.data.discount)/100)} تومان
                    </Table.Cell>
                    <Table.Cell>
                        <RedBtn className="rounded text-slate-700" onClick={() => {
                            dispatch(removeItem(product.id))
                        }}>
                            حذف
                        </RedBtn>
                    </Table.Cell>
                </Table.Row>)
                setProducts([...temp])
            })
        })
    }, [])
    if (cards.length !== 0) {
        return (
            <MainTheme>
                <Table className="text-right">
                    <Table.Head>
                        <Table.HeadCell>
                            نام محصول
                        </Table.HeadCell>
                        <Table.HeadCell>
                            دسته بندی
                        </Table.HeadCell>
                        <Table.HeadCell>
                            قیمت یک دانه
                        </Table.HeadCell>
                        <Table.HeadCell>
                            تعداد
                        </Table.HeadCell>
                        <Table.HeadCell>
                            قیمت
                        </Table.HeadCell>
                        <Table.HeadCell>
      <span className="sr-only">
        Edit
      </span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {...products}
                    </Table.Body>
                </Table>
                <div className="flex items-center justify-center m-4">
                    <form className="flex flex-col items-center gap-1 md:w-80" onSubmit={handleSubmit(data => {
                            dispatch(telephoneNumberChange(data.telephoneNumber))
                            dispatch(postalNumberChange(data.postalNumber))
                            navigate("/../fake-payment")
                        })
                    }>
                        <input placeholder="کد پستی" className="border-b border-gray-500 p-2 md:w-72" {...register("postalNumber", {pattern: {
                            value: /[0-9]{10}/,
                                message: "کد پستی را به درستی وارد نکرده اید."
                            },required:true})}/>

                        {errors.postalNumber?.message ? <span className="text-red-600">{ errors.postalNumber.message }</span>:""}
                        <input placeholder="شماره تماس" type="tel" className="border-b border-gray-500 p-2 md:w-72" {...register("telephoneNumber",{ pattern: {
                            value: /[0|+98]?9[0-9]{9}/,
                            message: "شماره تماس را به درستی وارد نکرده اید."
                        },required:true})}/>
                        {errors.telephoneNumber?.message ? <span className="text-red-600">{ errors.telephoneNumber.message }</span>:""}
                        <BlueBtn className="rounded mt-4 w-full" type="submit">پرداخت</BlueBtn>
                    </form>
                </div>
            </MainTheme>
        )
    } else {
        return (
            <MainTheme className="flex items-center justify-center">
                <h1 className="text-2xl">سبد خرید شما خالی است.</h1>
            </MainTheme>
        )
    }
}