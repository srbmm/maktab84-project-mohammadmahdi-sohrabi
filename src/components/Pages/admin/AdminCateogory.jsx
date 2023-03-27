import {BlueBtn, HeaderAdmin, MainTheme, MyModal} from "@/components";
import {useLogin} from "@/hooks";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {addCategory, getCategory} from "@/api";


export const AdminCateogory = () => {
    const [isLogin, updateLogin] = useLogin()
    const navigate = useNavigate()
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([])
    const [modalState, setModelState] = useState(false)
    useEffect(()=> {
        getCategory({}).then(response => setCategories(response.data))
    }, [])
    if (!isLogin) navigate("/admin")
    return (
        <MainTheme>
            <HeaderAdmin />
            <BlueBtn onClick={()=> setModelState(true)} className="w-full rounded">افزودن دسته بندی جدید</BlueBtn>
            <MyModal modalState={modalState} setModalState={setModelState}>
                <form onSubmit={handleSubmit((data) => {
                    if(!categories.find(item => item.name === data.name)) addCategory(data).then(() => {
                        reset()
                        setModelState(false)
                    })
                })} className="flex flex-col gap-2">
                    <div className="flex flex-col">
                        <label>به انگلیسی:</label>
                        <input className="border-b border-gray-500" {...register("name", {required: true})}/>
                    </div>
                    <div className="flex flex-col">
                        <label>به فارسی:</label>
                        <input className="border-b border-gray-500" {...register("persian", {required: true})}/>
                    </div>
                    <BlueBtn type="submit">اضافه کردن</BlueBtn>
                </form>
            </MyModal>
        </MainTheme>
    )
}