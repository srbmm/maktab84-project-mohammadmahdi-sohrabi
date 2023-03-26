import {useNavigate, useParams} from "react-router-dom";
import {Category, NumberOfPages, URL} from "@/constant";
import {MainTheme, ProductGroup, Loading} from "@/components";
import {Label, Pagination, Select} from "flowbite-react";
import {useState} from "react";
import {getProducts} from "@/api";
import {useLoad} from "@/hooks";

export const Products = () => {
    const {page, category} = useParams();
    const navigate = useNavigate();
    const [sortSelect, setSortSelect] = useState("")
    const [priceValue, setPriceValue] = useState({item: "", reverse: false});
    const [products, isLoad] = useLoad(getProducts({
        page,
        category,
        sort: priceValue
    }), [page, category, priceValue])
    const categories = Category.map(item => <option value={item.name}>{item.persian}</option>)
    categories.unshift(<option value="all">همه</option>)
    return (
        <MainTheme>
            <Loading isLoad={isLoad}>
                <div className="flex gap-4">
                    <div id="select" className="w-full">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="category"
                                value="دسته بندی:"
                            />
                        </div>
                        <Select
                            id="category"
                            required={true}
                            value={category}
                            onChange={(e) => {
                                navigate(`${URL.products.url}/${e.currentTarget.value}/page/${page}`)
                            }
                            }

                        >
                            {...categories}
                        </Select>
                    </div>
                    <div id="select2" className="w-full">
                        <div className="mb-2 block">
                            <Label
                                htmlFor="price"
                                value="قیمت:"
                            />
                        </div>
                        <Select
                            id="price"
                            required={true}
                            value={sortSelect}
                            onChange={(e) => {
                                if (e.target.value === 'lowToUp') setPriceValue({item: "price", reverse: false})
                                else if (e.target.value === 'upToLow') setPriceValue({item: "price", reverse: true})
                                else setPriceValue({item: "", reverse: false})
                                setSortSelect(e.target.value)
                            }
                            }
                        >
                            <option value="">هیچکدام</option>
                            <option value="lowToUp" >صعودی</option>
                            <option value="upToLow">نزولی</option>
                        </Select>
                    </div>
                </div>
                <ProductGroup products={products}/>
                <div className="flex items-center justify-center text-center ltr">
                    <Pagination
                        currentPage={page}
                        layout="pagination"
                        onPageChange={page => {
                            navigate(`${URL.products.url}/${category}/page/${page}`)
                        }}
                        showIcons={true}
                        totalPages={NumberOfPages}
                        previousLabel="قبل"
                        nextLabel="بعد"
                    />
                </div>
            </Loading>
        </MainTheme>
    )
}
