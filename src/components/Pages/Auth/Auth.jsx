import {Login, SignUp, SimpleFooter, SimpleHeader} from "@/components/index.js";
import {useState} from "react";
import "./Auth.css"

export const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <div className="flex flex-col justify-between h-100vh items-center">
            <SimpleHeader/>
            {isSignUp ? <SignUp setIsSignUp={setIsSignUp}/> : <Login setIsSignUp={setIsSignUp}/>}
            <SimpleFooter/>
        </div>
    );
};

