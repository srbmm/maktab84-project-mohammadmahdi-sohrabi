import axios from "@/api/customeAPI";
import {PrADDRESS,LimitInPage} from "@/constant";

export const getProducts =  ({category, page, sort , search}) => {
    let temp = "?"
    if (category && category !== "all"){
        temp += `category=${category}`
    }
    if (search){
        temp += `&${search.key}_like=${search.value}`
    }
    if(page){
        temp += `&_page=${page}&_limit=${LimitInPage}`
    }
    if (sort){
        if(sort.item){
            temp += `&_sort=${sort.item}`
        }
        if(sort.reverse){
            temp += `&_order=desc`
        }
    }
    return axios.get(`${PrADDRESS}${temp}`)
}
export const getProduct = (id) => axios.get(`${PrADDRESS}/${id}`)

export const addProduct = (obj) => axios.post(PrADDRESS,{...obj, id: Math.floor(Math.random() * 1000000000)})

export const editProduct = (obj) => axios.put(`${PrADDRESS}/${obj.id}`,obj)

export const deleteProduct = (id) => axios.delete(`${PrADDRESS}/${id}`)
