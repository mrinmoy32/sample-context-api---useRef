import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <Child>
        <h4>This is children prop</h4>
      </Child>
    </div>
  );
}

export default Parent;