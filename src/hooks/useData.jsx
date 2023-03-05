import React, {useState, useEffect} from 'react';
import axios from "axios";
export function useData(address, id = "") {
    const [data, setData] = useState([])
    const [isFind, setIsFind] = useState(true)
    useEffect(() => {
        axios.get(`${address}/${id}`).then(response => setData(response.data)).catch(()=> setIsFind(false))
    },[])
    function add(obj){
        axios.post(address, obj).then(response => {
            setData([...data])
            return true
        }).catch(response => false)
        data.push(obj)
    }
    function get(){

    }
    function edit(obj){
        axios.put(`${address}/${obj.id}`, obj).then(response => {
            axios.get(address).then(response => setData(response.data))
            return true
        }).catch(response => false)

    }
    function remove(obj){
        axios.delete( `${address}/${obj.id}`).then(response => {
            axios.get(address).then(response => setData(response.data))
            return true
        }).catch(response => false)
    }
    return [data, add, edit, remove, isFind]
}
