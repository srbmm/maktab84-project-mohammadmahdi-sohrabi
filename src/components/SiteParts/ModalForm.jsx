import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Category} from "@/constant/";
import {MyModal} from "@/components"


export function ModalForm({modalState, setModalState, isEdit, editClick, addClick}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({values : {...isEdit,picture: undefined}});
    const submitForm = data => {
        if (isEdit?.name === undefined) addClick(data)
        else editClick(data)
    }
    if (Object.keys(errors).length !== 0){
        console.log(errors)
        toast.error('لطفا اطلاعات را با دقت وارد نمایید.');
    }

    return (
        <div>
            <MyModal modalState={modalState} setModalState={setModalState}>
                <form className="w-96 mt-5 flex flex-col gap-2" onSubmit={handleSubmit(submitForm)} >
                    <div className="flex flex-col gap-1">
                        <label>نام:</label>
                        <input className="border-b border-gray-500" {...register("name", {required: true})} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>دسته بندی:</label>
                        <select className="border-b border-gray-500" {...register("category", {required: true})} >
                            {Category.map(item => <option key={item.name} value={item.name}>{item.persian}</option>)}
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>قیمت:</label>
                        <input className="border-b border-gray-500" {...register("price", {required: true})} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>تخفیف به درصد:</label>
                        <input className="border-b border-gray-500" type="number" {...register("discount", {required: true, min: 0, max: 100})} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>تعداد:</label>
                        <input className="border-b border-gray-500" type="number" {...register("number", {type: "number", required: true})}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>عکس محصول:</label>
                        <input className="border-b border-gray-500" type="file" {...register("picture")}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>توضیحات محصول:</label>
                        <textarea className="border-b border-gray-500" type="file" rows="7" {...register("description", {required: true})}></textarea>
                    </div>
                    {isEdit?.name === undefined ? <input className="bg-red-400 p-2 w-full hover:cursor-pointer" type="submit" value="اضافه کردن" /> :
                        <input className="bg-red-400 p-2 w-full hover:cursor-pointer" type="submit" value="ویرایش کردن" />}
                </form>
            </MyModal>
        </div>
    );
}
