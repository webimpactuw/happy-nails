import React, { useEffect, useState } from 'react';

function HomePage() {

/*
 TODO:  
    - put heroBanner directly into HomePage
    - moving gallery
    - reviews
*/

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default HomePage;