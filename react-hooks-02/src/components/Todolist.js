import React, { useState } from 'react';
import ColorBox from './Colorbox';

export default function Todolist() {
    const listData = () => { return ['Love', 'Van', 'Vu']; }

    const [todoList, setTodoList] = useState(listData());

    function removeItemTodoList (index){
        const newTodoList = [...todoList];

        newTodoList.splice(index, 1);
        setTodoList(newTodoList);
    }

    return (
        <>
            <ul>
                {
                    todoList.map((value,index)=>{
                       return <li key={index}>
                            {value}
                            <button onClick = {()=>{removeItemTodoList(index)}}>Xoá</button>
                       </li>
                    })
                }
            </ul>
            <ColorBox />
        </>
    )
}
