import React, {useEffect, useState} from 'react';
import {useHref} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setTrue , setFalse } from '@/store/authSlice.jsx'
import {refreshTokenAPI} from "@/api/index.js";
export function useLogin(){
    const address = useHref()
    const isLogin = useSelector(state => state.auth.value)
    const dispatch = useDispatch()

    useEffect(() => {
        const cookie = JSON.parse(localStorage.getItem("auth"));
        if (cookie) {
            refreshTokenAPI().then(response => {
                    cookie.accessToken = response.data.accessToken
                    localStorage.setItem("auth", JSON.stringify(cookie))
                    dispatch(setTrue())
                }
            ).catch((err) => {
                console.log(err)
                dispatch(setFalse())
                localStorage.removeItem("auth")
            })
        }else dispatch(setFalse())
    }, [address])
    const update = () => {
        const cookie = JSON.parse(localStorage.getItem("auth"));
        if (cookie) {
            return new Promise(resolve => {
                refreshTokenAPI().then(response => {
                        cookie.accessToken = response.data.accessToken
                        localStorage.setItem("auth", JSON.stringify(cookie))
                        dispatch(setTrue())
                        resolve(true)
                    }
                ).catch((err) => {
                    console.log(err)
                    dispatch(setFalse())
                    localStorage.removeItem("auth")
                    resolve(false)
                })
            })
        }else dispatch(setFalse())
    }
    return [isLogin, update]
}