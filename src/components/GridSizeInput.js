import React from 'react';
import { useState } from 'react';
import IntSlider from './IntSlider.js';

/* component to allow IO to change size of grid */
const GridSizeInput = ({changeSize, curWidth, curHeight}) => {
    const [width, setWidth] = useState(curWidth);
    const [height, setHeight] = useState(curHeight);

    // function called when the submit button is clicked
    function handleSubmit(e){
        e.preventDefault();
        changeSize(Number(width), Number(height));
    }

    return (
        <form className='size-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='size-control'> {/* width input */}
                <label>Width</label>
                <IntSlider curValue={curWidth} changeSize={(e) => setWidth(Number(e.target.value))}/>
            </div>
            <div className='size-control'> {/* height input */}
                <label>Height</label>
                <IntSlider curValue={curHeight} changeSize={(e) => setHeight(Number(e.target.value))}/>
            </div>

            <input type='submit' value='Change Size' className='change-btn'/>
        </form>
    )
}

export default GridSizeInput