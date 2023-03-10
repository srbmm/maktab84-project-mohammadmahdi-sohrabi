import {HeaderAdmin, MainTheme, ProductAdminTag, SearchBox, ModalForm} from "@/components";
import {useData} from "@/hooks"
import {useReducer, useState} from "react";
import {PrADDRESS} from "@/Constant/index.js";

export const AdminProducts = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(0);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function afterOpenModal() {
    }

    const [modalFormValues, dispatch] = useReducer((state, {type, value}) => {
        switch (type) {
            case "name":
                return {...state, name: value}
            case "category":
                return {...state, category: value}
            case "price":
                return {...state, price: value}
            case "discount":
                return {...state, discount: value}
            case "number":
                return {...state, number: value}
            case "img":
                return {...state, img: value}
            case "reset":
                return {name: "", category: "", price: "", discount: "", number: "1", img: ""}
            case "all":
                return {
                    name: value.name,
                    category: value.category,
                    price: value.price,
                    discount: value.discount,
                    number: value.number,
                    img: ""
                }
        }
    }, {name: "", category: "", price: "", discount: "", number: "1", img: ""})
    const [data, add, edit, remove] = useData(PrADDRESS);
    const [search, setSearch] = useState("")
    const filteredData = search ? data.filter(product => product.name.includes(search)) : data
    const products = filteredData.map(product => <ProductAdminTag name={product.name} category={product.category} price={product.price} number={product.number} picture={product.picture}
                                                                  onClickEdit={() => {
                                                                      setIsEdit(product)
                                                                      dispatch({type: "all", value: product})
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
                dispatch({type: "reset"})
                openModal()
            }} className="bg-my-blue p-2 text-center w-full mt-1 mb-1">اضافه کردن محصول جدید
            </button>
            <ModalForm formValues={modalFormValues} modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} isEdit={isEdit}
                       onChange={(e) => {dispatch({type:e.target.id, value:e.target.value})}}
                       editClick={(e) =>{
                           e.preventDefault()
                           edit({...modalFormValues, id:isEdit.id, persianCategory:isEdit.persianCategory, description:isEdit.description,picture:isEdit.picture})
                           closeModal()
                       }}
            />
            <SearchBox value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className="m-10">
                {...products}
            </div>
        </MainTheme>
    )
}