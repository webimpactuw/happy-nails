import React from 'react';

/*
 TODO:  
    - drop down menu
    - redirecting
    - use inline styling for non-repeating styling
    - interactive buttons?
*/

function NavBar() {
    const logoStyle = {
        fontFamily: 'Georgia, serif',
        color: 'white',
        padding: '0 0 0 2em',
        display: 'flex',
        alignItems: 'center',
        justfyContent: 'flex-start',
        fontStyle: 'italic'
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
    }

    const buttonStyle = {
        backgroundColor: 'white',
        color: 'rgb(125, 18, 96)',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '5px',
        borderColor: 'white',
        padding: '1px 2em '

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
                <h4>Home</h4>
            </div>
            <div style={navStyle}>
                <h4>Contact</h4>
            </div>
            <div style={navStyle}>
                <h4>Services</h4>
            </div>
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