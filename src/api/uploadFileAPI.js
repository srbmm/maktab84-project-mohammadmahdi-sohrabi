import axios from "@/api/customeAPI";
import {uploadADDRESS} from "@/constant/index.js";

export const uploadImg = (value) => {
    const formData = new FormData()
    formData.append("image", value[0])
    return axios.post(uploadADDRESS, formData)
}