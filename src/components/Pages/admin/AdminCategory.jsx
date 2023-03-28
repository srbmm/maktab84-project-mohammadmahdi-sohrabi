import {BlueBtn, RedBtn, HeaderAdmin, MainTheme, MyModal} from "@/components";
import {useLoad, useLogin} from "@/hooks";
import {useState, useEffect} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {addCategory, deleteCategory, editCategory, getCategory, getProducts} from "@/api";
import {URL} from "@/constant"
import {Table} from "flowbite-react"
import {toast} from "react-toastify";

export const AdminCategory = () => {
    const [isLogin, updateLogin] = useLogin()
    const navigate = useNavigate()
    const [isEdit, setIsEdit] = useState({})
    const {register, handleSubmit, watch, reset, formState: {errors}} = useForm(isEdit);
    const [modalState, setModelState] = useState(false)
    const [categories, isLoad, updateCategories] = useLoad(getCategory({}), [])
    const [showCategory, setShowCategory] = useState([])
    let isSend = false
    useEffect(() => {
        if (!isSend) {
            setShowCategory([])
            if (categories.length !== 0) {
                categories.forEach(category => {
                    getProducts({category: category.name}).then(response => {
                        showCategory.push(<Table.Row>
                            <Table.Cell>{category.name}</Table.Cell>
                            <Table.Cell>{category.persian}</Table.Cell>
                            <Table.Cell><BlueBtn onClick={() => {
                                setModelState(true)
                                reset({persian: category.persian})
                                setIsEdit(category)
                            }}>ویرایش</BlueBtn></Table.Cell>
                            <Table.Cell><RedBtn onClick={e => {
                                if (response.data.length === 0) {
                                    deleteCategory(category.id).then(() => {
                                        updateCategories()
                                        setShowCategory([])
                                        isSend = false
                                    })
                                } else {
                                    toast.error("لطفا تمام محصولات مربوط به این دسته بندی را حذف کنید.")
                                }
                            }}>حذف</RedBtn></Table.Cell>
                        </Table.Row>)
                        setShowCategory([...showCategory])
                    })
                })
                isSend = true
            }
        }
    }, [categories]);
    if (!isLogin) navigate(URL.admin.url)
    return (<MainTheme>
            <HeaderAdmin/>
            <BlueBtn onClick={() => {
                setIsEdit({})
                setModelState(true)
                reset({name: '', persian: ''})
            }} className="w-full rounded">افزودن دسته بندی جدید</BlueBtn>
            <MyModal modalState={modalState} setModalState={setModelState}>
                <form onSubmit={handleSubmit((data) => {
                    updateLogin().then(isLogin => {
                        if (isLogin) {
                            if (isEdit.name) {
                                isEdit.persian = data.persian
                                console.log(isEdit)
                                editCategory(isEdit).then(() => {
                                    updateCategories()
                                    setShowCategory([])
                                    isSend = false
                                    setModelState(false)
                                })
                            } else {
                                if (!categories.find(item => item.name === data.name)) {
                                    addCategory(data).then(() => {
                                        updateCategories()
                                        setShowCategory([])
                                        isSend = false
                                        setModelState(false)
                                    })
                                } else {
                                    toast.error("این نام قبلا وارد شده است.")
                                }
                            }
                        } else {
                            navigate(URL.admin.url)
                        }
                    })
                })} className="flex flex-col gap-2">
                    {!isEdit.name ? <>
                        <div className="flex flex-col">
                            <label>به انگلیسی:</label>
                            <input className="border-b border-gray-500" {...register("name", {required: true})}/>
                        </div>
                        <div className="flex flex-col">
                            <label>به فارسی:</label>
                            <input className="border-b border-gray-500" {...register("persian", {required: true})}/>
                        </div>
                        <BlueBtn type="submit">اضافه کردن</BlueBtn>
                    </> : <>
                        <div className="flex flex-col">
                            <label>به فارسی:</label>
                            <input className="border-b border-gray-500" {...register("persian", {required: true})}/>
                        </div>
                        <BlueBtn type="submit">ویرایش کردن</BlueBtn></>}

                </form>
            </MyModal>
            <Table className="text-center">
                <Table.Head>
                    <Table.HeadCell>
                        به انگلیسی
                    </Table.HeadCell>
                    <Table.HeadCell>
                        به فارسی
                    </Table.HeadCell>
                    <Table.HeadCell>ویرایش</Table.HeadCell>
                    <Table.HeadCell>حذف</Table.HeadCell>
                </Table.Head>
                <Table.Body>
                    {...showCategory}
                </Table.Body>
            </Table>

        </MainTheme>)
}