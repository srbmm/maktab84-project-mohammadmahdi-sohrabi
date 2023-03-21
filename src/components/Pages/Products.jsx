import {useNavigate, useParams} from "react-router-dom";
import {Category, URL} from "@/Constant";
import {MainTheme, ProductGroup, Loading} from "@/components";
import {Label, Pagination, Select} from "flowbite-react";
import {useState} from "react";
import {getProducts} from "@/api";
import {useLoad} from "@/hooks/index.js";

export const Products = () => {
    const {page, category} = useParams();
    const navigate = useNavigate();
    const [priceValue, setPriceValue] = useState({item: "", reverse: false});
    const [products, isLoad] = useLoad(getProducts({
        page: page,
        category: category,
        sort: priceValue
    }), [page, category, priceValue])
    const options = Category.map((cat) => {
        if (cat.name === category) return <option value={cat.name} selected>{cat.persian}</option>
        else return <option value={cat.name}>{cat.persian}</option>
    })
    if (category === "all") options.unshift(<option value="all" selected>همه</option>)
    else options.unshift(<option value="all">همه</option>)
    return (
        <Loading isLoad={isLoad}>
            <MainTheme>
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
                            defaultValue={category}
                            onChange={(e) => {
                                navigate(`${URL.products.url}/${e.currentTarget.value}/page/${page}`)
                            }
                            }

                        >
                            {...options}
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
                            defaultValue={priceValue}
                            onChange={(e) => {
                                if (e.target.value === 'lowToUp') setPriceValue({item: "price", reverse: true})
                                else if (e.target.value === 'upToLow') setPriceValue({item: "price", reverse: false})
                                else setPriceValue({item: "", reverse: false})
                            }
                            }

                        >
                            <option value="" selected>هیچکدام</option>
                            <option value="lowToUp">صعودی</option>
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
                        totalPages={2}
                        previousLabel="قبل"
                        nextLabel="بعد"
                    />
                </div>
            </MainTheme>
        </Loading>
    )
}
