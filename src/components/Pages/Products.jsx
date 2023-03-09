import {useNavigate, useParams} from "react-router-dom";
import {Category, PrADDRESS, URL} from "@/Constant";
import {MainTheme, ProductGroup} from "@/components";
import {Label, Pagination, Select} from "flowbite-react";
import {useEffect, useState} from "react";
import axios from "axios";

export const Products = () => {
    const {page, category} = useParams();
    const [thisPage, setThisPage] = useState(page)
    const [thisCategory, setThisCategory] = useState(category)
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    let isFind = true;
    function getProduct() {
        if (category === "all") {
            axios.get(`${PrADDRESS}?_page=${page}&_limit=9`).then(
                (response) => setProducts(response.data)
            ).catch(() => isFind = false)
        }else {
            axios.get(`${PrADDRESS}?category=${category}&_page=${page}&_limit=9`).then(
                (response) => setProducts(response.data)
            ).catch(() => isFind = false)
        }
    }
    useEffect(() => {
        return getProduct()
    }, [page, category])
    const options = Category.map((cat) => {
        if (cat.name === category) return <option value={cat.name} selected>{cat.persian}</option>
        else return <option value={cat.name} >{cat.persian}</option>
    })
    if(category === "all") options.unshift(<option value="all" selected>همه</option>)
    else options.unshift(<option value="all">همه</option>)
    if (isFind) {
        return (
            <MainTheme>
                <div id="select">
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
        )
    } else {
        return <Navigate to="/"/>
    }
}
