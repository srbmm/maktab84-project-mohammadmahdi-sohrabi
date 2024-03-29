import {Auth, HeaderAdmin, MainTheme} from "@/components";
import {useLogin} from "@/hooks";


export const Admin = () => {
    const [isLogin] = useLogin()
    if (!isLogin) {
        return (
            <>
                <Auth />
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