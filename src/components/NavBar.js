import React from 'react';
import { useState } from 'react';
import HoverButton from '../components/HoverButton'
import { motion } from "motion/react"
import NavButton from './NavButton';



function NavBar() {
    const [isHovered, setIsHovered] = useState(false);

    const logoStyle = {
        fontFamily: "'Fraunces', serif",
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justfyContent: 'flex-start',
        fontStyle: 'italic',
        
    }

    const navBarStyle = {
        display: 'flex',
        backgroundColor: 'rgb(125, 18, 96)',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: '0 1em'
    }

    const navigationStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }

    const navStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        padding: '1em',
        fontFamily: 'DM Sans',
        fontSize: '100%',
        fontWeight: 'bold',
        textDecoration: 'none',
        fontWeight: '100',

    }

    const buttonStyle = {
        backgroundColor: isHovered ? 'rgb(243, 243, 243)' : 'white',
        color: 'rgb(125, 18, 96)',
        fontFamily: 'DM Sans',
        borderRadius: '5px',
        borderColor: 'white',
        padding: '0.75em 1.5em ',
        boxShadow: 'black',
        fontWeight: '600',
        fontSize: '15px'
    }

  return (

  <div>
  <nav>
    <div style={navBarStyle}>
        <h1 style ={logoStyle}>Happy Nails</h1>
        <div style={navigationStyle}>

          <NavButton text={'Home'} link={'/'} defaultStyle={navStyle}></NavButton>
          <NavButton text={'About'} link={'/about'} defaultStyle={navStyle}></NavButton>
          <HoverButton buttonStyle={navStyle}></HoverButton>
          <NavButton text={'Contact'} link={'/contacts'} defaultStyle={navStyle}></NavButton>

            <motion.button
              style={buttonStyle}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'rgb(243, 243, 243)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => window.location.href = '/booking'} // href doesn't work on <button>
            >

              Book Now
            </motion.button>
        </div>
    </div>

  </nav>
  </div>

  );
}



export default NavBar;


