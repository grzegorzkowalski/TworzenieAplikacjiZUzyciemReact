import React, { useState } from 'react'
import StoperContext, {initialState, StoperType} from "./StoperContext";
import Stoper from "./Stoper";
import "./App.css";
function App() {
  const [state, dispatch] = useState<StoperType>(initialState);

  const providerValue = React.useMemo(() => ({
      state, dispatch
  }), [state]);

  return (
    <StoperContext.Provider value={providerValue}>
      <Stoper />
    </StoperContext.Provider>
  )
}

export default App
