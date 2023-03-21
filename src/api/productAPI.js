import axios from "@/api/customeAPI";
import {PrADDRESS} from "@/Constant";

export const getProducts =  ({category, page, sort : {
    item = "",
    reverse = false
}, search}) => {
    let temp = "?"
    if (category && category !== "all"){
        temp += `category=${category}`
    }
    if (search){
        temp += `&${search.key}_like=${search.value}`
    }
    if(page){
        temp += `&_page=${page}&_limit=9`
    }
    if(item){
        temp += `&_sort=${item}`
    }
    if(reverse){
        temp += `&_order=desc`
    }
    return axios.get(`${PrADDRESS}${temp}`)
}
export const getProduct = (id) => axios.get(`${PrADDRESS}/${id}`)

export const addProduct = (obj) => axios.post(PrADDRESS,{...obj, id: Math.floor(Math.random() * 1000000000)})

export const editProduct = (obj) => axios.put(`${PrADDRESS}/${obj.id}`,obj)

export const deleteProduct = (id) => axios.delete(`${PrADDRESS}/${id}`)
