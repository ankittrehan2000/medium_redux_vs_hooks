import './App.css';
import React, { useContext, useReducer, useState } from 'react';

const ContextExample = React.createContext();

const ExampleProvider = ({ children }) => {
    const [value, setValue] = useState(0);
    return(
        <ContextExample.Provider value={value}>
            {children}
        </ContextExample.Provider>
    )
}

function App() {
  return (
    <ExampleProvider>
    
    </ExampleProvider>
  );
}

export default App;
