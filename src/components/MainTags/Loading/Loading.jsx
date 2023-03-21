import './Loading.css'
import {ErrorBoundary} from "@/components";

export const Loading = ({children, isLoad}) => {
        if (isLoad){
            return <ErrorBoundary>{children}</ErrorBoundary>
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