import React from 'react';
import bannerImage from '../assets/HeroBanner.png';

function HeroBanner() {
  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ 
        fontSize: '4rem', 
        marginBottom: '1rem', 
        fontFamily: "'Fraunces', serif" 
      }}>
        Happy Nails
      </h1>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1.2rem',
          backgroundColor: '#8227B5',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontFamily: "'DM Sans', sans-serif",
          marginTop: '0.75em'
        }}
      >
        Book Now
      </button>    
    </div>
  );
}

export default HeroBanner;
