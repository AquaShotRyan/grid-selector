import React from 'react';
import { useState } from 'react';

const ColorInput = ({changeColor, curActive, curBackground}) => {

    const [actvCol, setActvCol] = useState(curActive);
    const [bckgrndCol, setBckgrndCol] = useState(curBackground);

    // converts string to rgb() format accepted by CSS
    function rgbConverter(r, g, b){
        r = Number(r);
        g = Number(g);
        b = Number(b);
    
        if (isNaN(r)) r = 20;
        if (isNaN(g)) g = 20;
        if (isNaN(b)) b = 20;
        
        return `rgb(${r}, ${g}, ${b})`
    }
    function rgbParser(input){
        input = input.split(','); // get input split by ,
        let result = []
        for (let i=0; i<input.length; ++i){ // for each element in input, extract the numbers
            let matches = input[i].match(/(\d+)/);
            // Display output if number extracted
            if (matches) {
                result.push(matches[0]);
            }
        }
        return rgbConverter(result[0], result[1], result[2]);
    }
    
    // functions to check the hex input
    function hexChecker(input){
        let hexPattern = /^#[0-9A-F]{6}$/i; // from https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
        return hexPattern.test(input);
    }
    function hexHandler(input){
        if (hexChecker(input) === false) return '#e8e8e8';
        return input
    }

    function handleSubmit(e){
        e.preventDefault();
        changeColor(actvCol, bckgrndCol);
    }

    return (
        <form className='color-form' onSubmit={(e) => handleSubmit(e)}>
            <div className='color-type'>Active Color</div>
            <div className='color-control'> {/* active hex */}
                <label>Hex</label>
                <input type='text' placeholder='' 
                 onChange={(e) => setActvCol(hexHandler(e.target.value))}/>
            </div>
            <div className='color-control'> {/* active rgb */}
                <label>RGB</label>
                <input type='text' placeholder='' 
                 onChange={(e) => setActvCol(rgbParser(e.target.value))}/>
            </div>
            <div className='color-type'>Background Color</div>
            <div className='color-control'> {/* background hex */}
                <label>Hex</label>
                <input type='text' placeholder='' 
                 onChange={(e) => setBckgrndCol(hexHandler(e.target.value))}/>
            </div>
            <div className='color-control'> {/* background rgb */}
                <label>RGB</label>
                <input type='text' placeholder='' 
                 onChange={(e) => setBckgrndCol(rgbParser(e.target.value))}/>
            </div>
            <input type='submit' value='Change Color' className='change-btn'/>
        </form>
    )
}

export default ColorInput