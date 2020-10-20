import React, { useState } from 'react'
import './Tree.css';

export const Tree = (props) => {
    const [showImage, setshowImage] = useState(false);
    const [buttonText, setButtonText] = useState("Show Image");
    const handleClick = () => {
        setshowImage(!showImage)
        if (showImage) {
            setButtonText("Show Image")
        }
        else setButtonText("Hide Image")
    }

    return (
        <div className='box' >
            <h1 className='treeName'>{props.name}</h1>
            <h3 className='spiciesName'>{props.species_name}</h3>
            <button className='button' onClick={handleClick} data-testid="tree">
                {buttonText}
            </button>
            <div className='img'>
                {showImage && <img src={props.image} alt={props.name}></img>}
            </div>
        </div>
    )
}