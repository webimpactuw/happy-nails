import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function HoverButton(props){
    const[isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    console.log(props.buttonStyle)

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
        // padding: '16px',
        // height: '100px',

        border: 'none',
        fontWeight: 'bold',
        fontSize: '100%'
    }

    /* Dropdown content when hovered */ 
    const dropdownContentHover = {
        display: 'block',
        position: 'absolute',
        backgroundColor: 'white',
        width: '100%',
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
        <div style={dropdown}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <a onClick={() => navigate('/services')} style={props.buttonStyle}>Services</a>
            <div style={isHovered ? dropdownContentHover : {display: 'none'}}>
                <a href="#" style={dropDownElement}>Manicure</a>
                <a href="#" style={dropDownElement}>Pedicure</a>
                <a href="#" style={dropDownElement}>Nails</a>
            </div>
        </div>

    );
}

export default HoverButton;
