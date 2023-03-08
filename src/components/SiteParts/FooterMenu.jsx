import {Link} from "react-router-dom";

export const FooterMenu = ({data}) => {
    const links = data.links.map(link => <Link to={link.to} className="text-gray-500">{link.name}</Link>)
    return (
        <div className="flex flex-col gap-2">
            <h4 className="font-bold">{data.title}</h4>
            {...links}
        </div>
    )
}