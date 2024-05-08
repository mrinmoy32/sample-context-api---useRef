import "./App.css";
import Parent from "./Components/Parent";
import UseRefComponent from "./Components/UseRefComponent";
import { stateContext } from "./context/stateContext";

function App() {
  let appState = {
    name: "John",
    age: 25,
  }
  return (
    <>
      <stateContext.Provider value= {appState}>
        <Parent />
      </stateContext.Provider>
      <UseRefComponent />
    </>
  );
}

export default App;
