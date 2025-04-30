import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function HoverButton(){
    const[isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    /* The container <div> needed to position the dropdown content */
    const dropdown = {
        position: 'relative',
        display: 'inline-block'
    }

    /* Dropdown button */
    const dropbtn = {
        backgroundColor: 'rgb(125, 18, 96)',
        fontFamily: 'Arial, sans-serif',
        color: 'white',
        padding: '16px',
        height: '100px',
        border: 'none',
        fontWeight: 'bold',
        fontSize: '100%'
    }

    /* Dropdown content when hovered */ 
    const dropdownContentHover = {
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white',
        width: '160px',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: '1'
    }

    /* Links inside the dropdown */
    const dropDownElement = {
        color:'rgb(125, 18, 96)',
        padding: '12px 16px',
        textDecoration: 'none',
        display: 'block',
        justifyContent: 'center'
    }
    return (
        <div class="dropdown"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <button onClick={() => navigate('/services')} style={dropbtn}>Services</button>
            <div style={isHovered ? dropdownContentHover : {display: 'none'}}>
                <a href="#" style={dropDownElement}>Nails</a>
                <a href="#" style={dropDownElement}>Waxing</a>
                <a href="#" style={dropDownElement}>Foot Massage</a>
            </div>
        </div>

    );
}

export default HoverButton;
