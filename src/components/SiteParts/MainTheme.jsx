import {BreadCrumbs, Footer, Header} from "@/components/index.js";

export const MainTheme = ({children, className}) => {
    className = `m-56 ${className}`
    return (
        <>
            <Header/>
            <BreadCrumbs />
            <div className={className}>
                {children}
            </div>
            <div className="m-5 pr-56 pl-56">
                <Footer/>
            </div>
        </>
    )
}