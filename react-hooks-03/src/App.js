import React, { useState } from 'react'
import Todolist from './components/Todolist';
import TodoForm from './components/TodoForm';
import ContentText from './components/ContentText';
import './app.scss';

function App(props) {
  const dataList = [
    {id: 1, title: 'I love u'},
    {id: 2, title: 'I"m Vux'},
    {id: 3, title: 'Tran Thi Thuy Sinh'}
  ]
  const [todoList, setTodoList] = useState(dataList);
  const [isShow, setIsShow] = useState(false);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(value => value.id === todo.id );

    if(index < 0) {return};

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleSubmit(value){
    console.log("value", value);
    const newTodo = {
      id: todoList.length + 1,
      ...value
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
  }

  function handleShowMore(value){
    setIsShow(value);
  }

  return (
    <div>
      <h1>Hello Todolist</h1>
      <TodoForm onSubmit={handleSubmit} />
      <Todolist todos = {todoList} onTodoClick={handleTodoClick}/>
      <ContentText isShow={isShow} onClickShowMore={handleShowMore}/>
    </div>
  )
}

App.propTypes = {

}

export default App

