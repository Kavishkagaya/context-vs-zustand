import { useState } from "react";
import ContextApp from "./context-app/App";
import ZustandApp from "./zustand-app/App";
import QueryApp from "./query-app/App";

function App() {
  const [method, setMethod] = useState("context");

  return (
    <div className="App">
      <div className="radio-group">
        <input type="radio" name="method" value="context" id="context-label" checked={method === "context"} onChange={() => setMethod("context")} />
        <label htmlFor="context-label">
          Context
        </label>
        <input type="radio" name="method" value="zustand" id="zustand-label" checked={method === "zustand"} onChange={() => setMethod("zustand")} />
        <label htmlFor="zustand-label">
          Zustand
        </label>
        <input type="radio" name="method" value="zustand" id="query-label" checked={method === "query"} onChange={() => setMethod("query")} />
        <label htmlFor="query-label">
          query
        </label>
      </div>
      {method === "context" ? (
        <ContextApp />
      ) : method === "zustand" ? (
        <ZustandApp />
      ) : (
        <QueryApp />
      )}
    </div>
  )
}

export default App
