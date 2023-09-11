import React, { useEffect, useState } from 'react';

function EffectDemo({ count }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (count >= 10) {
      setMessage('Count is high!');
    } else {
      setMessage('');
    }
  }, [count]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default EffectDemo;
