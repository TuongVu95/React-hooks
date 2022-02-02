import React, { useState } from 'react';
import PropTypes from 'prop-types';

Colorbox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['deeppink', 'red', 'yellow', 'blue', 'green'];
    const randomColor = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomColor];
}
function countNumber(value){
    return value += 1;
}
function unMountNumber(value){
    if(value != 0){
        return value -= 1;
    }
    return false;
}

function Colorbox() {

    const [color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('itemColor') || '#000';
        return initColor;
    });
    const [number, setNumber] = useState(0);

    function handleBoxClick() {
        //get ramdom color -> set color
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('itemColor', newColor);
    }

    function handleRamdomNumber(){
        const newNumber = countNumber(number);
        setNumber(newNumber);
    }

    function handleUnMountNumber(){
        const newNumber = unMountNumber(number);
        setNumber(newNumber);
    }

    return (
        <>
            <div className="color-box" style={{ backgroundColor: color }}>
                Color Box
            <button onClick={() => { handleBoxClick() }}>Click random color</button>
            </div>
            <div className="random-number">
                <button onClick={()=>{handleUnMountNumber()}}>Tăng số lượng</button>
                <span>{number}</span>
                <button onClick={()=>{handleRamdomNumber()}}>Tăng số lượng</button>
            </div>
        </>
    );
}

export default Colorbox;