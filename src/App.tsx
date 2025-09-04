import { useState } from "react";
import { CurrencyContextProvider } from "./contexts/CurrencyContext"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import ContextRootContainer from "./pages/ContextRootContainer"
import StoreRootContainer from "./pages/StoreRootContainer";

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
        <ThemeContextProvider>
          <CurrencyContextProvider>
            <ContextRootContainer />
          </CurrencyContextProvider>
        </ThemeContextProvider>
      ) : (
        <StoreRootContainer />
      )}
    </div>
  )
}

export default App
