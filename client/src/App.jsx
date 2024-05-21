import React, { useReducer } from "react";
import { AppContext } from "./Contexts/Context"; 
import Board from "./Components/Board/Board";
import { Reducer } from "./Reducer/Reducer";
import { initGameState } from "./Constant";
function App() {
  const [appState, dispatch] = useReducer(Reducer, initGameState);

  const providerState = {
    appState,
    dispatch,
  };
  return (
    <AppContext.Provider value={providerState}>
      <div className="game">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
