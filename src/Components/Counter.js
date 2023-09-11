import React, { useState, useEffect } from 'react';
import EffectDemo from './EffectDemo';

function Counter() {
  let [count, setCount] = useState(0);
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
  };

  let reset = () => {
    setCount(0);
  };

  useEffect(() => {
    // Simulate an API call to fetch data from the JSON file
    fetch('/data.json')
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // This effect runs when the count changes
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <>
    <nav>
        <h1>Increment and Decrement Counter using Hooks</h1>
    </nav>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <EffectDemo count={count} />
      <h2>Data from API:</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Counter;
