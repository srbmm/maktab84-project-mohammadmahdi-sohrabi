import axios from "@/api/customeAPI";
import {CategoryADDRESS} from "@/constant";

export const getCategory = ({name}) => {
    let temp = "?"
    if(name) temp += `name=${name}`
    return axios.get(`${CategoryADDRESS}${temp}`)
}
export const addCategory = (obj) => axios.post(CategoryADDRESS,{...obj, id: Math.floor(Math.random() * 1000000000)})
export const editCategory = (obj) => axios.put(CategoryADDRESS + "/" + obj.id,obj)
export const deleteCategory = (id) => axios.delete(CategoryADDRESS + "/" + id)
