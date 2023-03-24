import {useEffect, useState} from "react";

export const useLoad = (func, deps) => {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false)
    const [isLoad, setIsLoad] = useState(false);
    deps.push(toggle)
    useEffect(() => {
        setIsLoad(false)
        func.then(response => setData(response.data)).catch(err => console.log(err)).finally(() => setIsLoad(true));
    }, deps);
    const update = () => {
        setToggle(!toggle)
    }
    return [data, isLoad, update]
}