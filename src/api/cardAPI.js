import axios from "@/api/customeAPI";
import {CardADDRESS, LimitInPage} from "@/constant";

export const getCards = ({mode, page}) => {
    let temp = "?"
    console.log(mode)
    if(mode !== "all" && mode) temp += `mode=${mode}`
    if(page) temp += `&_page=${page}&_limit=${LimitInPage}`
    console.log(CardADDRESS + temp)
    return axios.get(`${CardADDRESS}${temp}`)

}
export const getCard = (id) => axios.get(`${CardADDRESS}/${id}`)

export const addCard = (obj) => axios.post(CardADDRESS,{...obj, id: Math.floor(Math.random() * 1000000000)})

export const editCard = (obj) => axios.put(`${CardADDRESS}/${obj.id}`,obj)

