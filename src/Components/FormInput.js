import React, { useRef } from 'react';

function FormInput() {
  // Create a ref for the input element
  let inputRef = useRef(null);

  let focusInput = () => {
    // Focus on the input element when the button is clicked
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <h1>Form Input</h1>
      <input
        type="text"
        ref={inputRef} // Attach the ref to the input element
        placeholder="Type something..."
      />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default FormInput;
