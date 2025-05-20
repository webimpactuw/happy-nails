import React, { useState, useEffect } from 'react';
import HoverButton from '../components/HoverButton';
import { motion } from 'framer-motion';
import NavButton from './NavButton';

function NavBar() {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;

  const logoStyle = {
    fontFamily: "'Fraunces', serif",
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontStyle: 'italic',
    fontSize: isMobile ? '1.2em' : '1.5em',
  };

  const navBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: 'flex',
    backgroundColor: 'rgb(125, 18, 96)',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: isMobile ? '0.5em' : '0 1em',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
  };

  const navigationStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'center' : 'flex-end',
    alignItems: 'center',
    width: isMobile ? '100%' : 'auto',
    gap: isMobile ? '0.5em' : '1em',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: isMobile ? '0.5em' : '1em',
    fontFamily: 'DM Sans',
    fontSize: isMobile ? '90%' : '100%',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const buttonStyle = {
    backgroundColor: isHovered ? 'rgb(243, 243, 243)' : 'white',
    color: 'rgb(125, 18, 96)',
    fontFamily: 'DM Sans',
    borderRadius: '5px',
    border: 'none',
    padding: isMobile ? '0.5em 1em' : '0.75em 1.5em',
    fontWeight: '600',
    fontSize: isMobile ? '13px' : '15px',
  };

  return (
    <nav>
      <div style={navBarStyle}>
        <h1 style={logoStyle}>Happy Nails</h1>
        <div style={navigationStyle}>
          <NavButton text="Home" link="/" defaultStyle={navStyle} />
          <NavButton text="About" link="/about" defaultStyle={navStyle} />
          <HoverButton buttonStyle={navStyle} />
          <NavButton text="Contact" link="/contacts" defaultStyle={navStyle} />
          <motion.button
            style={buttonStyle}
            whileHover={{ scale: 1.05, backgroundColor: 'rgb(243, 243, 243)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => (window.location.href = '/booking')}
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
