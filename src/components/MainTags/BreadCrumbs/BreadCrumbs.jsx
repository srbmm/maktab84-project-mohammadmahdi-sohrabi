import {Link, useParams} from "react-router-dom";
import BreadCrumbs from "use-react-router-breadcrumbs";


export const Product = () => {
    const { id } = useParams()
    const breadcrumbs = BreadCrumbs()
    return (
        <div>

            <nav className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
                <ol className="inline-flex gap-2 items-center">
                    {breadcrumbs.map(({ breadcrumb }) => {return(
                        <li className="inline-flex items-center gap-2">
                            <Link href="#"
                                  class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                Home
                            </Link>
                        </li>
                    )})}
                </ol>
            </nav>
        </div>
    )
}
