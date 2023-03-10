import Modal from 'react-modal';
import {useContext} from "react";

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

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export function ModalForm({formValues, afterOpenModal, closeModal, modalIsOpen, isEdit, editClick = () => {}, addClick = () => {},onChange}) {
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="modal"
            >
                <button onClick={closeModal}
                        className="bg-gray-300 rounded-full h-7 w-7 flex items-center justify-center">X
                </button>
                <form className="w-96 mt-5 flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <label>نام:</label>
                        <input className="border-b border-gray-500" onChange={onChange} id="name"
                               value={formValues?.name}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>دسته بندی:</label>
                        <input className="border-b border-gray-500" onChange={onChange} id="category"
                               value={formValues?.category}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>قیمت:</label>
                        <input className="border-b border-gray-500" onChange={onChange} id="price"
                               value={formValues?.price}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>تخفیف به درصد:</label>
                        <input className="border-b border-gray-500" onChange={onChange} id="discount"
                               value={formValues?.discount}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>تعداد:</label>
                        <input className="border-b border-gray-500" type="number"
                               onChange={onChange} id="number" value={formValues?.number}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label>عکس:</label>
                        <input className="border-b border-gray-500" type="file"
                               onChange={onChange} id="img"/>
                    </div>
                    {isEdit?.name === undefined ? <button className="bg-red-400 p-2 w-full" onClick={addClick}>اضافه کردن</button> :
                        <button className="bg-red-400 p-2 w-full" onClick={editClick}>ویرایش کردن</button>}
                </form>
            </Modal>
        </div>
    );
}
