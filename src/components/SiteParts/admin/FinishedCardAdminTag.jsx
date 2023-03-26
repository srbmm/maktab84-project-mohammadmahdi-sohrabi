import {useEffect, useState} from "react";
import {BlueBtn, MyModal, TPLink} from "@/components";
import {editCard, getProduct} from "@/api/index.js";
import {Table} from "flowbite-react";
import {useNavigate} from "react-router-dom";
import {URL} from "@/constant";

export const FinishedCardAdminTag = ({card, updateLogin}) => {
    const [prNames, setPrNames] = useState([]);
    const [mode, setMode] = useState(card.mode);
    const navigate = useNavigate()
    useEffect(() => {
        const temp = []
        card.products.forEach((product) => {
            getProduct(product.id).then(response => {
                temp.push(
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            <TPLink className="m-1 rounded"
                                    to={`../../products/${response.data.category}/${response.data.id}`}>{response.data.name}</TPLink>
                        </Table.Cell>
                        <Table.Cell>
                            {product.number}
                        </Table.Cell>
                        <Table.Cell>
                            {product.number * response.data.price * ((100 - response.data.discount) / 100)} تومان
                        </Table.Cell>
                    </Table.Row>)
                setPrNames([...temp])
            })
        })
    }, [])
    const [modal, setModal] = useState(false)
    return (<>
            <MyModal setModalState={setModal} modalState={modal}>
                <div className="p-2">
                    <select value={`${mode}`} onChange={e => {
                        setMode(e.target.value)
                        editCard({...card, mode: e.currentTarget.value}).then(() => {
                        })
                    }}>
                        <option value="1">پرداخت شده</option>
                        <option value="2">ارسال شده</option>
                        <option value="3">تحویل داده شده</option>
                    </select>
                </div>
                <Table className="text-right">
                    <Table.Head>
                        <Table.HeadCell>
                            نام محصول
                        </Table.HeadCell>
                        <Table.HeadCell>
                            تعداد
                        </Table.HeadCell>
                        <Table.HeadCell>
                            قیمت
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {prNames}
                    </Table.Body>
                </Table>

            </MyModal>
            <Table.Row>
                <Table.Cell>{card.name ? card.name : "وارد نشده"}</Table.Cell>
                <Table.Cell>{card.telephoneNumber ? card.telephoneNumber : "وارد نشده"}</Table.Cell>
                <Table.Cell>{card.postalNumber ? card.postalNumber : "وارد نشده"}</Table.Cell>
                <Table.Cell>{card.address ? card.address : "وارد نشده"}</Table.Cell>
                <Table.Cell>{card.date ? new Date(card.date).toLocaleDateString('fa-IR') : "وارد نشده"}</Table.Cell>
                <Table.Cell><BlueBtn className="rounded" onClick={() => {
                    updateLogin().then(isLogin => {
                        if (isLogin) setModal(true)
                        else navigate(URL.admin)
                    })
                }}>اطلاعات بیشتر</BlueBtn></Table.Cell>
            </Table.Row>
        </>
    )
}
