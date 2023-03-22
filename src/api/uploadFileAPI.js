import axios from "@/api/customeAPI";
import {uploadADDRESS} from "@/Constant/index.js";

export const uploadImg = (value) => {
    const formData = new FormData()
    formData.append("image", value)
    return axios.post(uploadADDRESS, formData, {headers : { "Content-Type": "multipart/form-data" }})
}