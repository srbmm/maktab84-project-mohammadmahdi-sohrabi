import {useEffect, useState} from "react";

export const useLoad = (func, deps) => {
    const [data, setData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    useEffect(() => {
        func.then(response => setData(response.data)).catch(err => console.log(err)).finally(() => {if(setIsLoad) return setIsLoad(true)});
    }, deps);

    return [data, isLoad]
}