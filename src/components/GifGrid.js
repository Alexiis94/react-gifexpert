import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
    const {data:images,loading} = useFetchGifs( category);
    console.log(loading);


  //getGifs();
  return (
    <>
      <h3 className="animate__animated animate__bounce animate__delay-2s">{category}</h3>
      {/* Operador Terniario = ? 'Cargand' */}
      {/* es igual a un if */}
      {loading && <p className="animate__animated animate__bounce animate__delay-2s">Loading</p> }

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem 
            key={img.id}
            {...img} 
            />
        ))
        }
      </div>
    </>
  );
};
