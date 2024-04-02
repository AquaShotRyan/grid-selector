
import React from 'react';
import {useState} from 'react'; 
import GridSizeInput from './components/GridSizeInput.js';
import Grid from './components/Grid.js';
import ColorInput from './components/ColorInput.js';
import GridGapInput from './components/GridGapInput.js';
import SquareSizeInput from './components/SquareSizeInput.js';

function App() {
// stores row# and column# that the grid is sized with
const [gridBase, setGridBase] = useState({
    rows: 5,
    cols: 5
});

// stores the 2D array that represents the grid
const [gridMap, setGridMap] = useState(createGrid(gridBase.rows, gridBase.cols));

// size of each individual square in the grid
const [squareSize, setSquareSize] = useState(25);

// colors of the squares
const [activeColor, setActiveColor] = useState("rgb(8, 196, 172)");
const [backgroundColor, setBackgroundColor] = useState("rgb(0, 91, 65)");

// gap size between squares
const [gapSize, setGapSize] = useState(2);

// change the size of the grid
function changeSize(width, height){
    setGridBase(prevState => ({ ...prevState, rows: height, cols: width })); // this update is asynchronous, so use the width and height parameters instead of gridBase in subsequent lines of code
    setGridMap(createGrid(height, width));
}

// change the colors of the squares
function changeColor(active, background){
    setActiveColor(active);
    setBackgroundColor(background);
}

// creates a 2D array
function createGrid(rows, columns) {
    let table = [];
    for (let i=0; i < rows; ++i){
        let row = [];
        for (let k=0; k < columns; ++k){
        row.push(false);
        }
        table.push(row);
    }
    return table;
}

// takes a single square and inverts its colour
function toggleSquare(element) {
    let col = element.id.split("|")[1];
    let row = element.id.split("|")[0];

    const newGridMap = gridMap.map((r, rowIndex) => {
            if (rowIndex === Number(row)) {
                return r.map((c, colIndex) => {
                    if (colIndex === Number(col)) {
                    return !c;
                    } else {
                    return c;
                    }
                });
                } else {
                    return r;
            }
        });
        setGridMap(newGridMap);
}

// component returned
return (
    <div className="parent-container">
        <div className="title-container"> 
            <h2 className="title">Grid Selector</h2>
        </div>
        <div className="top-container"> {/* grid display */}
            <Grid gridMap={gridMap} 
                  squareSize={squareSize} 
                  toggleSquare={toggleSquare} 
                  activeColor={activeColor} 
                  backgroundColor={backgroundColor}
                  gapSize={gapSize}
                  />
        </div>
        <div className="bottom-container"> {/* controls */}
            <div className="control-container">
                <GridSizeInput changeSize={changeSize} curWidth={gridBase.cols} curHeight={gridBase.rows}/>
                <ColorInput changeColor={changeColor} curActive={activeColor} curBackground={backgroundColor}/>
                <GridGapInput changeGap={setGapSize} curGapSize={gapSize}/>
                <SquareSizeInput changeSquare={setSquareSize} curSquareSize={squareSize}/>
            </div>
        </div>
    </div>

);
}

export default App;
