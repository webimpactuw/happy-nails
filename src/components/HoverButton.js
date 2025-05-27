import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
/* eslint-disable react/prop-types */

function HoverButton(props) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const dropdown = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownContentHover = {
    display: 'block',
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: '1',
  };

  const dropDownElement = {
    color: 'rgb(125, 18, 96)',
    padding: '12px 16px',
    textDecoration: 'none',
    display: 'block',
    justifyContent: 'center',
    cursor: 'pointer',
  };

  return (
    <div
      style={dropdown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span onClick={() => navigate('/services')} style={{ ...props.buttonStyle, cursor: 'pointer' }}>
        Services
      </span>
      <div style={isHovered ? dropdownContentHover : { display: 'none' }}>
        <span onClick={() => navigate('/services#manicure')} style={dropDownElement}>
          Manicure
        </span>
        <span onClick={() => navigate('/services#pedicure')} style={dropDownElement}>
          Pedicure
        </span>
        <span onClick={() => navigate('/services#acrylic')} style={dropDownElement}>
          Acrylic Nails
        </span>
      </div>
    </div>
  );
}

export default HoverButton;
