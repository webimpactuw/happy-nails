import React from 'react';
import bannerImage from '../assets/HeroBanner.png';

function HeroBanner() {
  return (
    <div style={{ marginBottom: '0' }}>
      {/* Background image container */}
      <div
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '5em',
            marginBottom: '1rem',
            fontFamily: "'Fraunces', serif",
          }}
        >
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
            marginTop: '0.75em',
          }}
        >
          Book Now
        </button>
      </div>

      {/* Purple promo box attached to bottom */}
      <div
        style={{
          backgroundColor: '#7D1260',
          color: 'white',
          textAlign: 'center',
          padding: '2rem 1rem',
        }}
      >
      <h2
        style={{
          fontFamily: "'Fraunces', serif",
          fontStyle: 'italic',      
          fontSize: '2rem',
          marginBottom: '0.5rem',
          fontWeight: 'normal'
        }}
      >
        Be Bold. Be New. Be Happy.
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '1rem',
          color: '#FF97AF'
        }}
      >
        Get a fresh set today and feel like your best self
      </p>
      </div>
    </div>
  );
}

export default HeroBanner;
