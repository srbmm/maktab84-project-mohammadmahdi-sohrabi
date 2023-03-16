import {Auth, HeaderAdmin, MainTheme} from "@/components";
import {useForm} from "react-hook-form";
import {useCookies} from 'react-cookie';
import {useLogin} from "@/hooks";


export const Admin = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const isLogin = useLogin()
    if (!isLogin) {
        return (
            <>
                <Auth setCookie={setCookie}/>
            </>
        )
    } else {
        return (
            <MainTheme>
                <HeaderAdmin/>
            </MainTheme>
        )
    }
}