import { useState, useEffect } from "react"
import {getGifs} from '../helpers/GetGifs'
// se uso para realizar una carga automatica.
export const useFetchGifs = (category) =>{
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(()=>{
        getGifs(category)
            .then( imgs =>{
                setState({
                    data: imgs,
                    loading: false
                })
               


            })
    },[category])
    
    return state; // {data:[], loadding: true}
    
}