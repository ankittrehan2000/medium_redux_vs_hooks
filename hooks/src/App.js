import "./App.css";
import React, { useContext, useReducer } from "react";

const ContextExample = React.createContext();

const ExampleProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          value: state.value + 1,
        };
      case "increment2":
        return {
          ...state,
          value: state.value + 2,
        };
      case "increment3":
        return {
          ...state,
          value: state.value + 3,
        };
      default:
        return state;
    }
  };
  const [sharedState, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <ContextExample.Provider value={[sharedState, dispatch]}>
      <div className="mainContainer">{children}</div>
    </ContextExample.Provider>
  );
};

const Header = () => {
  const [sharedState, dispatch] = useContext(ContextExample);
  return (
    <div>
      <h1>{sharedState.value}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "increment",
            sharedState,
          });
        }}
        name="Increment"
        value="Increment"
      >
        Increment
      </button>
    </div>
  );
};

const Body = () => {
  const [sharedState, dispatch] = useContext(ContextExample);
  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: "increment2",
            sharedState,
          });
        }}
      >
        Add 2
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "increment3",
            sharedState,
          });
        }}
      >
        Add 3
      </button>
    </div>
  );
};

function App() {
  return (
    <ExampleProvider>
      <Header />
      <Body />
    </ExampleProvider>
  );
}

export default App;
