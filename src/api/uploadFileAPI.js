import axios from "@/api/customeAPI";
import {uploadADDRESS} from "@/Constant/index.js";

export const upload_img = (value) => axios.post(uploadADDRESS, new FormData().append("image", value), {headers : { "Content-Type": "multipart/form-data" }})