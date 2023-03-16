import {FinishedCardAdminTag, HeaderAdmin, MainTheme} from "@/components";
import {useData, useLogin} from "@/hooks";
import {CardADDRESS} from "@/Constant";
import { Navigate } from "react-router-dom";export const AdminHistory = () => {
    const isLogin = useLogin()
    if(isLogin) {
        const [data, add, edit, remove] = useData(CardADDRESS);
        const cards = data.map(card => <FinishedCardAdminTag userID={card.userID} telephone={card.telephoneNumber}
                                                             products={card.products} post={card.postalNumber}/>)
        return (
            <MainTheme>
                <HeaderAdmin/>
                <div className="m-10">
                    {...cards}
                </div>
            </MainTheme>
        )
    }else return <Navigate to="/admin" replace={true}/>
}