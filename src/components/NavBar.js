import React from 'react';
import { PiWifiNoneLight } from 'react-icons/pi';
import { useState } from 'react';
import HoverButton from '../components/HoverButton'
/*
 TODO:  
    - drop down menu
    - redirecting
    - use inline styling for non-repeating styling
    - interactive buttons?
*/

/*

1. Button to open dropdown the menu - The button to represent the drop down - service button in our case 
2. Use container element like div to create a drop down menu and add drop downlinks inside it - the container itself
3. Wrap a div element around the button and the div to position the drop menu correctly with CSS - Used for positioning. 
*/


/* HTML */
{/* <div class="drop down">
    <button class="dropbtn">Services</button>
    <div class="dropdown-content">
        <a href="#">Nails</a>
        <a href="#">Waxing</a>
        <a href="#">Foot Massage</a>
    </div>
</div> */}


function NavBar() {
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
        fontFamily: 'Arial, sans-serif',
        fontSize: '100%',
        fontWeight: 'bold',
        textDecoration: 'none',

    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'rgb(125, 18, 96)',
        fontFamily: 'Arial, sans-serif',
        // borderRadius: '5px',
        borderColor: 'white',
        padding: '0 2em ',
        boxShadow: 'black',
        fontWeight: 'bold',

    }

  return (

  <div>
  <nav>
    <div style={navBarStyle}>
            <h1  style ={logoStyle}>Happy Nails</h1>
        <div style={navigationStyle}>
                <a style={navStyle} href='/'>Home</a>
                <a style={navStyle} href='/contacts'>Contact</a>
            <HoverButton buttonStyle={navStyle}></HoverButton>
                <button style={buttonStyle} href='/booking'>
                    <p style={{fontWeight:'bold'}}>Book Now</p>
                </button>
        </div>
    </div>

  </nav>
  </div>

  );
}



export default NavBar;


