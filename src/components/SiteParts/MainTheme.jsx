import {BreadCrumbs, Footer, Header, ModalForm} from "@/components/index.js";

export const MainTheme = ({children, className, err=false}) => {
    className = `m-5 md:m-56 ${className}`
    return (
        <>
            <ModalForm />
            <Header/>
            {!err ? <BreadCrumbs /> : ""}
            <div className={className}>
                {children}
            </div>
            <Footer/>

        </>
    )
}