import bannerImage from '../assets/HeroBanner.png';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function HeroBanner() {
  const navigate = useNavigate(); 
  const buttonStyle = {
    color: 'rgb(243, 243, 243)',
    backgroundColor: 'rgb(125, 18, 96)',
    fontFamily: 'DM Sans',
    borderRadius: '5px',
    border: 'none',
    padding: '0.75em 1.5em',
    fontWeight: '600',
    fontSize: '17px',
    width: '150px',
    height: '50px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.3)'
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bannerImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ 
        fontSize: '6rem', 
        marginBottom: '1rem', 
        fontFamily: "'Fraunces', serif",
        padding: '1rem',
        margin: '0',
        fontStyle: 'italic',
        fontWeight: '400',
        width: '700px',
        textAlign: 'center',
      }}>
        Happy Nails
      </h1>
        <motion.button
            style={buttonStyle}
            whileHover={{ scale: 1.05}}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => navigate('/booking')}
            >
            Book Now
          </motion.button>   
    </div>
  );
}

export default HeroBanner;