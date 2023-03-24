import {HeaderAdmin, MainTheme, ProductAdminTag, SearchBox, ModalForm, Loading} from "@/components";
import {useLoad, useLogin} from "@/hooks";
import {useState} from "react";
import {Category, URL, NumberOfPages} from "@/Constant/index.js";
import {useNavigate} from "react-router-dom";
import {addProduct, getProducts, uploadImg, editProduct, deleteProduct} from "@/api/index.js";
import {Pagination} from "flowbite-react";
import {toast} from "react-toastify";



export const AdminProducts = () => {
    const isLogin = useLogin()
    const navigate = useNavigate()
    if (!isLogin) navigate("/admin")
    const [modalIsOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(0);
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("all")
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [data, isLoad, updateData] = useLoad(getProducts({page, category}), [page, category])
    const products = data.map(product => <ProductAdminTag name={product.name}
                                                          category={product.persianCategory}
                                                          price={product.price} number={product.number}
                                                          picture={product.picture}
                                                          onClickEdit={() => {
                                                              setIsEdit(product)
                                                              openModal()
                                                          }}
                                                          onClickRemove={
                                                              () => {
                                                                  deleteProduct(product.id).then(() => updateData())
                                                              }
                                                          }/>)
    const categories = Category.map(item => <option value={item.name} key={item.name}>{item.persian}</option> )
    categories.unshift(<option value="">همه</option>)
    return (
        <MainTheme>
            <HeaderAdmin/>
            <button onClick={() => {
                setIsEdit({})
                openModal()
            }} className="bg-my-blue p-2 text-center w-full mt-1 mb-1">اضافه کردن محصول جدید
            </button>
            <ModalForm modalIsOpen={modalIsOpen} closeModal={closeModal} isEdit={isEdit}
                       addClick={data => {
                           if (data.picture.length > 0) {
                               uploadImg(data.picture).then(response => {
                                   if (response.data.filename) {
                                       data.picture = "files/" + response.data.filename
                                       data.persianCategory = Category.find(item => item.name === data.category)?.persian
                                       try {
                                           data.price = +data.price
                                           data.discount = +data.discount
                                           data.number = +data.number
                                           addProduct(data).then(() => {
                                               updateData()
                                               toast.success("با موفقیت اضافه شد.")
                                               closeModal()
                                           })
                                       } catch (err) {
                                           console.log(err)
                                           toast.error("اضافه کردن با مشکل مواجه شد.")
                                       }
                                   }
                               })
                           }
                       }}
                       editClick={data => {
                           if (data.picture.length > 0){
                               uploadImg(data.picture).then(response => {
                                   if (response.data.filename) {
                                       data.picture = "files/" + response.data.filename
                                       data.persianCategory = Category.find(item => item.name === data.category)?.persian
                                       try {
                                           data.price = +data.price
                                           data.discount = +data.discount
                                           data.number = +data.number
                                           editProduct(data).then(() => {
                                               updateData()
                                               toast.success("با موفقیت ویرایش شد.")
                                               closeModal()
                                           })
                                       } catch (err) {
                                           console.log(err)
                                           toast.error("ویرایش کردن با مشکل مواجه شد.")
                                       }
                                   }
                               })
                           }else{
                               data.persianCategory = Category.find(item => item.name === data.category)?.persian
                               try {
                                   data.price = +data.price
                                   data.discount = +data.discount
                                   data.number = +data.number
                                   data.picture = isEdit.picture
                                   editProduct(data).then(() => {
                                       updateData()
                                       toast.success("با موفقیت ویرایش شد.")
                                       closeModal()
                                   })
                               }catch (err){
                                   console.log(err)
                                   toast.error("ویرایش کردن با مشکل مواجه شد.")
                               }
                           }
                       }}
            />
            <select onChange={e => setCategory(e.target.value)}>
                {categories}
            </select>
            <Loading isLoad={isLoad}>
                <div className="m-10">
                    {...products}
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