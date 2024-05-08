import React, {useContext} from "react";
import {stateContext} from '../context/stateContext'

function Child({children}) {
  const childState = useContext(stateContext)
  return (
    <div>
      <p>child</p>
      {/* children props */}
      {children}
      {/* Below is where we are using the context */}
      <p>{childState.name} and {childState.age}</p>
    </div>
  );
}

export default Child;
