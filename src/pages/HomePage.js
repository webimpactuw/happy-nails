import React, { useEffect, useState } from 'react';
import Foot from '../components/Foot';

function HomePage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }
  , []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Foot></Foot>
    </div>
  );
}

export default HomePage;