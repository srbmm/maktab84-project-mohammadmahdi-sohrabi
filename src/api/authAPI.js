import axios from "@/api/customeAPI";
import {loginADDRESS, refreshTokenADDRESS} from "@/Constant/index.js";

export const loginAPI = (username, password) => axios.post(loginADDRESS, {username, password})

export const refreshTokenAPI = () => axios.post(refreshTokenADDRESS)
