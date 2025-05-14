import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavButton(props){
    // const[isHovered, setIsHovered] = useState(false);
    const MotionLink = motion(Link);

    return (
    <MotionLink to={`${props.link}`}
        style={props.defaultStyle}
        // whileHover={{ scale: 1.05, color: "#3498db" }}
        // whileTap={{ scale: 0.95 }}
        // style={{ textDecoration: 'none', color: 'inherit', margin: '0 1rem' }}
      >
        {props.text}
      </MotionLink>    );
}

export default NavButton;
