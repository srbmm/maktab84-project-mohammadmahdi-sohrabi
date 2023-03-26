import {BlueBtn, RedBtn} from "@/components";
import {ADDRESS} from "@/constant";
import {Table} from "flowbite-react"

export const ProductAdminTag = ({name, category, price, number, picture, onClickEdit, onClickRemove}) => {
    picture = `${ADDRESS}/${picture}`
    return (
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{category}</Table.Cell>
                <Table.Cell>{price}</Table.Cell>
                <Table.Cell>{number}</Table.Cell>
                <Table.Cell className="hidden md:block"><img src={picture} className="h-48"/></Table.Cell>
                <Table.Cell><BlueBtn className="w-24" onClick={onClickEdit}>ویرایش</BlueBtn></Table.Cell>
                <Table.Cell><RedBtn className="w-24" onClick={onClickRemove}>حذف</RedBtn></Table.Cell>
            </Table.Row>

    )
}