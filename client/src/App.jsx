import React from 'react'
import { AppContext } from './Contexts/Context' // Adjust the import path as needed
import Board from './Components/Board/Board' // Assuming you have a Board component

function App() {
  return (
    <AppContext.Provider value={{}}>
      <div className="game">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;