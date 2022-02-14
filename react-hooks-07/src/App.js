import React, { useRef, useState,useEffect } from "react";

function App() {
  const countRef = useRef(0);
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const [inputValue, setinputValue] = useState('');

  const handleClick = () => {
    setCount(count + 1);
    countRef.current += 1;

  }
  console.log(count, countRef.current,inputRef.current);

  const handleInput = (e) => {
    const targetInput = e.target.value;
    setinputValue(targetInput);
  }

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <input type="text" ref={inputRef} value={inputValue} placeholder="Search..." onChange={handleInput}/>
        <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
