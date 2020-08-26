import React from 'react'
// imprimiendo gifs
export const GifGridItem = ({ id, title, url}) => {
    console.log(id,title,url);
    return (
        <div className="card animate__fadeIn" >
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    )
}
