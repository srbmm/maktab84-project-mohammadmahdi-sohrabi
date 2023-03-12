import {Navigate, useParams} from "react-router-dom";
import {URL} from "@/Constant/index.js";

export const NavigateToCategoryPage = () => {
    const {category} = useParams()
    return <Navigate to={`${URL.products.url}/${category}/page/1`} />
}