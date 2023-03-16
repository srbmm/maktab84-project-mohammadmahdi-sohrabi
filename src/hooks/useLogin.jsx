import React, {useEffect} from 'react';
import axios from "axios";
import {ADDRESS} from "@/Constant";
import {useHref} from "react-router-dom";
import {useCookies} from "react-cookie";
import { useSelector, useDispatch } from 'react-redux'
import { setTrue , setFalse } from '@/store/authSlice.jsx'
export function useLogin(){
    const address = useHref()
    const isLogin = useSelector(state => state.auth.value)
    const dispatch = useDispatch()
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    useEffect(() => {
        if (cookies.auth) {
            axios.interceptors.request.use(req => {
                if (req.url === ADDRESS + "/auth/refresh-token") {
                    req.headers.refreshToken = cookies.auth.refreshToken
                }
                return req
            })
            axios.post(ADDRESS + "/auth/refresh-token", undefined
            ).then(response => {
                    setCookie("auth", {...cookies.auth, accessToken: response.data.accessToken})
                    dispatch(setTrue())
                }
            ).catch((err) => console.log(err))
        }else dispatch(setFalse())
    }, [address])
    useEffect(() => {
        if(cookies.auth === undefined) dispatch(setFalse())
    },[cookies])
    function login() {
        dispatch(setTrue())
    }
    function logout(){
        dispatch(setFalse())
    }
    return isLogin
}