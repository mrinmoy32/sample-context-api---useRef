import React, { useRef } from 'react';

function UseRefComponent() {
  // Create a ref to hold the input element
  const inputRef = useRef();

  const handleClick = () => {
    // Access the current value of the input element using inputRef.current.value
    console.log('User entered:', inputRef.current.value);
  };

  return (
    <div>
        <h3>useRef Hooks usage to log the user input in the console</h3>
      {/* Input element with the ref attribute set to inputRef */}
      <input type="text" ref={inputRef} />

      {/* Button to log the input value */}
      <button onClick={handleClick}>Log Input Value</button>
    </div>
  );
}

export default UseRefComponent;
