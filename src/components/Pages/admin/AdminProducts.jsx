import {HeaderAdmin, MainTheme, ProductAdminTag, SearchBox, ModalForm} from "@/components";
import {useData, useLogin} from "@/hooks";
import {useState} from "react";
import {PrADDRESS} from "@/Constant/index.js";
import {useNavigate} from "react-router-dom";


export const AdminProducts = () => {
    const isLogin = useLogin()
    const navigate = useNavigate()
    if (!isLogin) navigate("/admin")
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(0);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    let formData = new FormData();
    const [data, add, edit, remove] = useData(PrADDRESS);
    const products = data.map(product => <ProductAdminTag name={product.name}
                                                                  category={product.persianCategory}
                                                                  price={product.price} number={product.number}
                                                                  picture={product.picture}
                                                                  onClickEdit={() => {
                                                                      setIsEdit(product)
                                                                      openModal()
                                                                  }}
                                                                  onClickRemove={
                                                                      () => remove(product)
                                                                  }/>)
    return (
        <MainTheme>
            <HeaderAdmin/>
            <button onClick={() => {
                setIsEdit({})
                openModal()
            }} className="bg-my-blue p-2 text-center w-full mt-1 mb-1">اضافه کردن محصول جدید
            </button>
            <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} isEdit={isEdit}
                       editClick={(data) => {
                           formData.append("image", data.image)
                           closeModal()
                       }}
            />
            <div className="m-10">
                {...products}
            </div>
        </MainTheme>
    )
}