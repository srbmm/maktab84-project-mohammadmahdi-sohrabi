import {BlueBtn, MainTheme, RedBtn, TPLink} from "@/components";
import {useEffect, useState} from "react";
import {URL} from "@/constant/index.js";
import {useSelector, useDispatch} from "react-redux";
import {
    removeItem,
    telephoneNumberChange,
    nameChange,
    dateChange,
    postalNumberChange,
    addressChange
} from "@/store/cardSlice.jsx"
import {Table} from "flowbite-react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {DatePicker} from "@kasraghoreyshi/datepicker";
import "@kasraghoreyshi/calendar/styles.css";
import {getProduct} from "@/api/index.js";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export const Card = () => {
    const navigate = useNavigate()
    const [date, setDate] = useState(undefined)
    const cards = useSelector(state => state.card.products)
    const [products, setProducts] = useState([]);
    const [number, setNumber] = useState({})
    const [submit, setSubmit] = useState(false);
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const dispatch = useDispatch()
    useEffect(() => {
        const temp = []
        cards.forEach((product, index) => {
            getProduct(product.id).then(response => {
                number[product.id] = product.number
                setNumber({...number})
                temp.push(<Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        <TPLink
                            to={`/../products/${response.data.category}/${response.data.id}`}>{response.data.name}</TPLink>
                    </Table.Cell>
                    <Table.Cell>
                        <TPLink
                            to={`/../products/${response.data.category}`}>{response.data.persianCategory}</TPLink>
                    </Table.Cell>
                    <Table.Cell>
                        {response.data.price * ((100 - response.data.discount) / 100)} تومان
                    </Table.Cell>
                    <Table.Cell>
                        {product.number}
                    </Table.Cell>
                    <Table.Cell>
                        {product.number * response.data.price * ((100 - response.data.discount) / 100)} تومان
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
            <MainTheme className="flex flex-col">

                {!submit ?
                    <>
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
                        <RedBtn className="rounded p-2 m-2" onClick={() => setSubmit(true)}>تایید سبد خرید</RedBtn>
                    </> :
                    <div className="flex flex-col items-center justify-center m-4">
                        <div>
                            <label>تاریخ تحویل:</label>
                            <DatePicker onChange={data => {
                                if (data - new Date() > 0) setDate(data)
                                else setDate("error")
                            }}/>

                            {date === "error" ?
                                <span className="text-red-600">تاریخ را به درستی وارد نکرده اید</span> : ""}
                        </div>

                        <form className="flex flex-col items-center gap-1 md:w-80" onSubmit={handleSubmit(data => {
                            if (!date) {
                                setDate("error")
                            }
                            if (date !== 'error' && date) {
                                data.date = date.toString()
                                dispatch(telephoneNumberChange(data.telephoneNumber))
                                dispatch(dateChange(date.toString()))
                                dispatch(nameChange(data.name))
                                dispatch(addressChange(data.address))
                                dispatch(postalNumberChange(data.postalNumber))
                                navigate(URL.fakePayment.url)
                            }
                        })
                        }>
                            <div className="flex flex-col">
                                <label>نام:</label>
                                <input placeholder="نام"
                                       className="border-b border-gray-500 p-2 md:w-72" {...register("name", {
                                    required: {value: true, message: "لطفا نام خود را وارد نمایید."}
                                })}/>
                                {errors.name?.message ?
                                    <span className="text-red-600">{errors.name.message}</span> : ""}
                            </div>
                            <div className="flex flex-col">
                                <label>کد پستی:</label>
                                <input placeholder="کد پستی"
                                       className="border-b border-gray-500 p-2 md:w-72" {...register("postalNumber", {
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "کد پستی را به درستی وارد نکرده اید."
                                    }, required: {value: true, message: "کد پستی را وارد نکرده اید."}
                                })}/>
                                {errors.postalNumber?.message ?
                                    <span className="text-red-600">{errors.postalNumber.message}</span> : ""}
                            </div>
                            <div className="flex flex-col">
                                <label>شماره تماس:</label>
                                <input placeholder="شماره تماس"
                                       className="border-b border-gray-500 p-2 md:w-72" {...register("telephoneNumber", {
                                    pattern: {
                                        value: /^[0|+98]?9[0-9]{9}$/,
                                        message: "شماره تماس را به درستی وارد نکرده اید."
                                    }, required: {value: true, message: "شماره تماس را وارد نکرده اید."}
                                })}/>
                                {errors.telephoneNumber?.message ?
                                    <span className="text-red-600">{errors.telephoneNumber.message}</span> : ""}
                            </div>
                            <div className="flex flex-col">
                                <label>آدرس:</label>
                                <textarea
                                    className="border-b border-gray-500 md:w-72" {...register("address", {
                                    required: {value: true, message: "آدرس را وارد نکرده اید."}
                                })}></textarea>
                                {errors.address?.message ?
                                    <span className="text-red-600">{errors.address.message}</span> : ""}
                            </div>
                            <BlueBtn className="rounded mt-4 w-full" type="submit">پرداخت</BlueBtn>
                        </form>
                    </div>}
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