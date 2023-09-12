import React, { useRef } from 'react';

function ValuePersistence() {
  // Create a ref to persist the value across renders
  let persistedValue = useRef(0);

  let incrementValue = () => {
    // Increment the persisted value when the button is clicked
    persistedValue.current += 1;
  };

  return (
    <div>
      <h1>Value Persistence</h1>
      <p>Persisted Value: {persistedValue.current}</p>
      <button onClick={incrementValue}>Increment</button>
    </div>
  );
}

export default ValuePersistence;
