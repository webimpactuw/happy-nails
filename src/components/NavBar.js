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
<div class="drop down">
    <button class="dropbtn">Services</button>
    <div class="dropdown-content">
        <a href="#">Nails</a>
        <a href="#">Waxing</a>
        <a href="#">Foot Massage</a>
    </div>
</div>


function NavBar() {
    const logoStyle = {
        fontFamily: 'Georgia, serif',
        color: 'white',
        padding: '2em',
        display: 'flex',
        alignItems: 'center',
        justfyContent: 'flex-start',
        fontStyle: 'italic',
        fontSize: '100%'
    }

    const navBarStyle = {
        display: 'flex',
        backgroundColor: 'rgb(125, 18, 96)',
        justifyContent: 'space-between',
        height: '100px',
        flexDirection: 'row'
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
        padding: '2em',
        fontFamily: 'Arial, sans-serif',
        fontSize: '100%'
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'rgb(125, 18, 96)',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '5px',
        borderColor: 'white',
        padding: '1px 2em ',
        boxShadow: 'black'

    }

  return (


  <div>
  <nav>
    <div style={navBarStyle}>
        <div style ={logoStyle}>
            <h1>Happy Nails</h1>
        </div>
        <div style={navigationStyle}>
            <div style={navStyle}>
                <a style={{fontWeight:'bold'}}>Home</a>
            </div>
            <div style={navStyle}>
            <a style={{fontWeight:'bold'}}>Contact</a>
            </div>
            <HoverButton></HoverButton>
            <div style={navStyle}>
                <button style={buttonStyle}>
                    <p style={{fontWeight:'bold'}}>Book Now</p>
                </button>
            </div>
        </div>
    </div>

  </nav>
  </div>

  );
}



export default NavBar;


