import axios from "@/api/customeAPI";
import {CardADDRESS} from "@/Constant";

export const getCards = (mode) => {
    if(mode === "all") return axios.get(CardADDRESS)
    else return axios.get(`${CardADDRESS}?mode=${mode}`)
}
export const getCard = (id) => axios.get(`${CardADDRESS}/${id}`)

export const addCard = (obj) => axios.post(CardADDRESS,{...obj, id: Math.floor(Math.random() * 1000000000)})

export const editCard = (obj) => axios.put(`${CardADDRESS}/${obj.id}`,obj)

export const deleteCard = (id) => axios.delete(`${CardADDRESS}/${id}`)
