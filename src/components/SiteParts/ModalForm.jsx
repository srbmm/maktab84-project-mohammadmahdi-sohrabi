import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export function ModalForm({closeModal, modalIsOpen, isEdit, editClick, addClick}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const submitForm = data => {
        if (isEdit?.name === undefined) addClick(data)
        else editClick(data)
    }
    if (Object.keys(errors).length !== 0){
        toast.error('لطفا اطلاعات را با دقت وارد نمایید.', {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div>
            <ToastContainer
                position="bottom-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                limit={1}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={() => {}}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="modal"
            >
                <button onClick={closeModal}
                        className="bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center">X
                </button>
                <form className="w-96 mt-5 flex flex-col gap-2" onSubmit={handleSubmit(submitForm)} >
                    <div className="flex flex-col gap-1">
                        <label>نام:</label>
                        <input className="border-b border-gray-500" {...register("name", {required: true})} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>دسته بندی:</label>
                        <input className="border-b border-gray-500" {...register("category", {required: true})} />
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
                        <input className="border-b border-gray-500" type="file" {...register("image", {required: true})}/>
                    </div>
                    {isEdit?.name === undefined ? <input className="bg-red-400 p-2 w-full hover:cursor-pointer" type="submit" value="اضافه کردن" /> :
                        <input className="bg-red-400 p-2 w-full hover:cursor-pointer" type="submit" value="ویرایش کردن" />}
                </form>
            </Modal>
        </div>
    );
}
