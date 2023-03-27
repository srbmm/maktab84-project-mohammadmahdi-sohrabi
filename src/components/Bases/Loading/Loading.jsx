import './Loading.css'
import {ErrorBoundary} from "@/components";

export const Loading = ({children, isLoad, isError=false}) => {
        if (isLoad){
            return <ErrorBoundary isError={isError}>{children}</ErrorBoundary>
        }
        return (
            <div className="h-screen w-screen bg-white flex items-center justify-center">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
}