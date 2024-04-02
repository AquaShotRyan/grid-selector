import React from 'react';
import { useRef } from 'react';

/* component that represents a single square in a grid */
const Square = ({colorCode, onClick, size, x, y, activeColor, backgroundColor, gapSize}) => {
    const myElementRef = useRef(null);

    return (
        <div ref={myElementRef} 
        className="square" 
        style={{margin: gapSize, backgroundColor: colorCode ? activeColor : backgroundColor, width: size, height: size}} 
        onClick={() => onClick(myElementRef.current)}
        id={`${x}|${y}`}
        >
        </div>
    )
}

Square.defaultProps = {
    activeColor: 'aquamarine',
    backgroundColor: 'red',
}

export default Square;