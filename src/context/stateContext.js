import { createContext } from "react";

// export const stateContext = createContext(
      // The argument in createContext is optional
// );
export const stateContext = createContext({
    name: "Virat",
    age: 35,
});

