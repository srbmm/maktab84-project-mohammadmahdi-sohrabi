import {BreadCrumbs, Footer, Header} from "@/components/index.js";

export const MainTheme = ({children, className}) => {
    className = `m-5 md:m-56 ${className}`
    return (
        <>
            <Header/>
            <BreadCrumbs/>
            <div className={className}>
                {children}
            </div>
            <Footer/>

        </>
    )
}