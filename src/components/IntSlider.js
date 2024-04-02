import React from 'react';
import { useState } from 'react'; 


const IntSlider = ({min, max, step, curValue, changeSize, submitChanges}) => {

    const [maxValue, setMaxValue] = useState(curValue);

    const handleChange = event => {
        event.preventDefault();
        const value = parseFloat(event.target.value);
        setMaxValue(value);

        // update grid
        changeSize(event);
    };
    
    return (
        <div className="int-slider-container">
            <input
            class="slider"
            type="range"
            value={maxValue}
            min={min}
            max={max}
            step={step}
            onInput={handleChange}
            />
            <div>{maxValue}</div>
        </div>
    )
}

IntSlider.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    curValue: 10,
}

export default IntSlider