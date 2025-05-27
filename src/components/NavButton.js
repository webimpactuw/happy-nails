import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function NavButton({ link, text, defaultStyle }) {
  const navigate = useNavigate();
  const baseStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1rem',
    ...defaultStyle
  };

  return (
    <motion.button
      type="button"
      style={baseStyle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate(link)}
    >
      {text}
    </motion.button>
  );
}

NavButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  defaultStyle: PropTypes.object,
};

export default NavButton;
