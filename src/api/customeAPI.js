import axios from "axios";
import {refreshTokenADDRESS, uploadADDRESS} from "@/Constant";

axios.interceptors.request.use(req => {
    const cookie = JSON.parse(localStorage.getItem("auth"));
    if (req.url === refreshTokenADDRESS) {
        req.headers.refreshToken = cookie.refreshToken
    }
    if (req.url === uploadADDRESS) {
        req.headers["Content-Type"] = "multipart/form-data"
    }
    return req
})
export default axios