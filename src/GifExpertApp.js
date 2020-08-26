import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState( ['One Punch']);

    // const handleAdd =() => {
        // 1. la forma correcta de agregar un valor a mi arreglo es usando el SetCategories
        // 2. Operador Spread [...categorias, 'valorAagregar']
        // setCategories([...categories, 'HunterXHunter']);
        // Si quiero que el valor a agregar se agrege de primero 
        //setCategories(['HunterXHunter', ...categories]);
    // }


    // 
    return (
        <>
            <h2>GifExpertApp</h2>
            {/* le pasamos una propiedad a AddCategory */}
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            
            
            <ol>
            {/* map() usamos para listar el arreglo con el total de mis categorias y retornamos una lista agregandole un key */}
                {
                    categories.map(category =>(
                        <GifGrid 
                        key={category}
                        category = {category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
