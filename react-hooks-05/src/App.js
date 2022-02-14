import React, {useState} from 'react';
import Children from './components/Children';
import {Count} from './components/Count';

export const CounterContext = React.createContext();

function App() {
  const valueState = 0;
  const [number, setNumber] = useState(valueState);

  function updateNumber(){
      return setNumber(number + 1);
  }

  return (
    <div className="App">
          <CounterContext.Provider value={{
            count: number,
            update: () => {updateNumber()}
          }}>
            <Count />
          </CounterContext.Provider>
        <Children />
    </div>
  );
}

export default App;

