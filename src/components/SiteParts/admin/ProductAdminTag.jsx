import {BlueBtn, RedBtn} from "@/components";
import {ADDRESS} from "@/Constant";

export const ProductAdminTag = ({name, category, price, number, picture, onClickEdit,onClickRemove}) => {
    picture = `${ADDRESS}/${picture}`
    return (
        <div className="w-full flex gap-6 items-center h-48 justify-between">
            <h3>{name}</h3>
            <h3>{category}</h3>
            <h3>{price}</h3>
            <h3>{number}</h3>
            <img src={picture} className="h-48"/>
            <BlueBtn className="w-24" onClick={onClickEdit}>ویرایش</BlueBtn>
            <RedBtn className="w-24" onClick={onClickRemove}>حذف</RedBtn>
        </div>
    )
}