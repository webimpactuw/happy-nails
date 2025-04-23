import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';


function AboutPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeroBanner />
    </div>
  );
}

export default AboutPage;