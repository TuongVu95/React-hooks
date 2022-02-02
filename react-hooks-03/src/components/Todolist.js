import React from 'react'
import PropTypes from 'prop-types'
function Todolist(props) {
    const { todos, onTodoClick } = props;

    function handleTodoClick(todo) {
        if(onTodoClick){
            onTodoClick(todo);
        }
    }
    return (
        <div>
            <ul className="todo-list">
                {
                    todos.map((value,index,array) => (
                        <li
                        key={value.id}
                        onClick = {()=>{handleTodoClick(value)}}
                        >
                            {value.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

Todolist.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

Todolist.defaultProps = {
    todos: [],
    onTodoClick: null,
}

export default Todolist

