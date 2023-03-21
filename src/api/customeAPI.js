import axios from "axios";
import {refreshTokenADDRESS} from "@/Constant/index.js";

axios.interceptors.request.use(req => {
    const cookie = JSON.parse(localStorage.getItem("auth"));
    if (req.url === refreshTokenADDRESS) {
        req.headers.refreshToken = cookie.refreshToken
    }
    return req
})
export default axios