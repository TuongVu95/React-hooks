import React, {useContext} from 'react';
import {CounterContext} from '../App';

export const Count = () => {
    const counter = useContext(CounterContext);
    const {count, update} = counter;

    return (
       <>
            <h1>{count}</h1>
            <button onClick={update}>Click me</button>
       </>
    )
}
