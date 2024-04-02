import React from 'react';
import { useState } from 'react';
import IntSlider from './IntSlider.js';

const GridGapInput = ({changeGap, curGapSize}) => {
    const [gapSize, setGapSize] = useState(curGapSize);

    function handleSubmit(e){
        e.preventDefault();
        changeGap(gapSize);
    }

    return (
        <form className='size-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='size-control'>
                <label>Gap Size</label>
                <IntSlider curValue={curGapSize} changeSize={(e) => setGapSize(Number(e.target.value))}/>
            </div>
            <input type='submit' value='Change Gap' className='change-btn'/>
        </form>
    )
}

export default GridGapInput;