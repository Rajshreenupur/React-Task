import React, { useRef } from 'react';

function DOMManipulator() {
  // Create a ref to access the DOM element
  let domElementRef = useRef(null);

  let changeColor = () => {
    // Change the color of the DOM element
    if (domElementRef.current) {
      domElementRef.current.style.backgroundColor = 'blue';
    }
  };

  let changeSize = () => {
    // Change the size of the DOM element
    if (domElementRef.current) {
      domElementRef.current.style.width = '200px';
      domElementRef.current.style.height = '200px';
    }
  };

  let toggleVisibility = () => {
    // Toggle the visibility of the DOM element
    if (domElementRef.current) {
      let currentVisibility = domElementRef.current.style.display;
      domElementRef.current.style.display = currentVisibility === 'none' ? 'block' : 'none';
    }
  };

  return (
    <>
    
      <h1>DOM Manipulator</h1>
      <button onClick={changeColor}>Change Color</button>
      <button onClick={changeSize}>Change Size</button>
      <button onClick={toggleVisibility}>Toggle Visibility</button>
      <div
        ref={domElementRef} // Attach the ref to the DOM element you want to manipulate
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'red',
        }}
      >
        This is the DOM Element
      </div>
    </>
  );
}

export default DOMManipulator;
