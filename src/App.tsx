import { useState } from "react";
import ContextApp from "./context-app/App";
import ZustandApp from "./zustand-app/App";

function App() {
  const [method, setMethod] = useState("context");

  return (
    <div className="App">
      <div className="radio-group">
        <label>
          <input type="radio" name="method" value="context" checked={method === "context"} onChange={() => setMethod("context")} />
          Context
        </label>
        <label>
          <input type="radio" name="method" value="zustand" checked={method === "zustand"} onChange={() => setMethod("zustand")} />
          Zustand
        </label>
      </div>
      {method === "context" ? (
        <ContextApp />
      ) : (
        <ZustandApp />
      )}
    </div>
  )
}

export default App
