import React, {useEffect} from 'react';
import axios from "axios";
import {ADDRESS} from "@/Constant";
import {useHref} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setTrue , setFalse } from '@/store/authSlice.jsx'
export function useLogin(){
    const address = useHref()
    const isLogin = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    useEffect(() => {
        const cookie = JSON.parse(localStorage.getItem("auth"));
        console.log(cookie)
        if (cookie) {
            axios.interceptors.request.use(req => {
                if (req.url === ADDRESS + "/auth/refresh-token") {
                    req.headers.refreshToken = cookie.refreshToken
                }
                return req
            })
            axios.post(ADDRESS + "/auth/refresh-token", undefined
            ).then(response => {
                    cookie.accessToken = response.data.accessToken
                    localStorage.setItem("auth", JSON.stringify(cookie))
                    dispatch(setTrue())
                }
            ).catch((err) => {
                dispatch(setFalse())
                localStorage.removeItem("auth")
            })
        }else dispatch(setFalse())
    }, [address])
    return isLogin
}