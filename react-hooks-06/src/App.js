import React, { useMemo, useState } from 'react';
import TodoList from './components/TodoList';

function exNumber(value) {
  console.log(value)
  return value * 2;
}

function App() {
  const [state, setstate] = useState(0);
  const [num, setNum] = useState(1);

  const numbers = useMemo(() => {
    return exNumber(num);
  }, [num]);

  return (
    <div className="App">
      <h1>{state}</h1>
      <h2>{numbers}</h2>
      <button onClick={() => { setstate(state + 1) }}>CLick</button>
      <TodoList />
    </div>
  );
}

export default App;
