import React from 'react';
import {useState} from 'react';
import IntSlider from './IntSlider.js';

const SquareSizeInput = ({changeSquare, curSquareSize}) => {
    const [squareSize, setSquareSize] = useState(curSquareSize);

    function handleSubmit(e){
        e.preventDefault();
        changeSquare(squareSize);
    }

    return (
        <form className='size-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='size-control'> 
                <label>Square Size</label>
                <IntSlider curValue={curSquareSize} changeSize={(e) => setSquareSize(Number(e.target.value))}/>
            </div>
            <input type='submit' value='Change Square Size' className='change-btn'/>
        </form>
    )
}

export default SquareSizeInput