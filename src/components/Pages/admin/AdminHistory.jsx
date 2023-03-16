import {FinishedCardAdminTag, HeaderAdmin, MainTheme} from "@/components";
import {useData, useLogin} from "@/hooks";
import {CardADDRESS} from "@/Constant";
import {useNavigate} from "react-router-dom";

export const AdminHistory = () => {
    const isLogin = useLogin()
    const navigate = useNavigate()
    if (!isLogin) navigate("/admin")
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
}