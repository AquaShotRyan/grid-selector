import React from 'react';
import Square from './Square.js';

/* component that contains the grid of squares */
const Grid = ({gridMap, squareSize, toggleSquare, activeColor, backgroundColor, gapSize}) => {
    return (
        <div className="grid-container">
        {gridMap.map((row, rowIndex) =>( // use map function and grid map to draw the entire grid in html
            <div className="row">
                {
                row.map((col, colIndex)=>(
                    <div className="column">
                    <Square 
                    colorCode={gridMap[rowIndex][colIndex]} 
                    x={rowIndex} y={colIndex} 
                    size={squareSize} 
                    onClick={toggleSquare}
                    activeColor={activeColor}
                    backgroundColor={backgroundColor}
                    gapSize={gapSize}
                    />
                    </div>
                ))
                }
            </div>
        ))}

        </div>
    )
}

export default Grid