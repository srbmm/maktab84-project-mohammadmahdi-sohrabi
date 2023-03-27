import {FinishedCardAdminTag, HeaderAdmin, Loading, MainTheme} from "@/components";
import {useLoad, useLogin} from "@/hooks";
import {useNavigate} from "react-router-dom";
import {getCards} from "@/api";
import {Pagination, Table} from "flowbite-react";
import {NumberOfPages} from "@/constant";
import {useState} from "react";
export const AdminHistory = () => {
    const [isLogin, updateLogin] = useLogin()
    const navigate = useNavigate()
    const [page, setPage] = useState(1);
    const [mode, setMode] = useState("all")
    if (!isLogin) navigate("/admin")
    const [data, isLoad, updateData] = useLoad(getCards({page, mode, reverse: true}),[page,mode])
    const cards = data.map(card => <FinishedCardAdminTag key={card.id} card={card} updateLogin={updateLogin}/>)
    return (
        <MainTheme>
            <Loading isLoad={isLoad}>
                <HeaderAdmin/>
                <div className="m-10">
                    <select value={mode} onChange={e => {
                        setMode(e.target.value)
                        }
                    }>
                        <option value="all">همه</option>
                        <option value="1">پرداخت شده</option>
                        <option value="2">ارسال شده</option>
                        <option value="3">تحویل داده شده</option>
                    </select>
                    <Table className="text-right">
                        <Table.Head>
                            <Table.HeadCell>
                                نام
                            </Table.HeadCell>
                            <Table.HeadCell>
                                شماره تماس
                            </Table.HeadCell>
                            <Table.HeadCell>
                                کد پستی
                            </Table.HeadCell>
                            <Table.HeadCell>
                                آدرس
                            </Table.HeadCell>
                            <Table.HeadCell>
                                تاریخ تحویل
                            </Table.HeadCell>
                            <Table.HeadCell>

                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {...cards}
                        </Table.Body>
                    </Table>
                </div>
            </Loading>
            <div className="flex items-center justify-center text-center ltr">
                <Pagination
                    currentPage={page}
                    layout="pagination"
                    onPageChange={page => {
                        setPage(page);
                    }}
                    showIcons={true}
                    totalPages={NumberOfPages}
                    previousLabel="قبل"
                    nextLabel="بعد"
                />
            </div>
        </MainTheme>
    )
}