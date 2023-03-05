import {FinishedCardAdminTag, HeaderAdmin, MainTheme} from "@/components";
import { useData } from "@/hooks";
export const AdminHistory = () => {
    const [data, add, edit, remove] = useData("http://localhost:3000/finishedCards");
    const cards = data.map(card => <FinishedCardAdminTag userID={card.userID} telephone={card.telephoneNumber} products={card.products} post={card.postalNumber}/>)
    return (
        <MainTheme>
            <HeaderAdmin/>
            <div className="m-10">
                {...cards}
            </div>
        </MainTheme>
    )
}