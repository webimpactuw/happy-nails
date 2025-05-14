import { useEffect, useState } from 'react';
import SectionDivider from '../components/SectionDivider';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

// Responsive hook
function useIsSmallScreen(breakpoint = 768) {
  const [isSmall, setIsSmall] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsSmall(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isSmall;
}

function ContactPage() {
  const isSmallScreen = useIsSmallScreen();

  const pageStyling = {
    backgroundColor: '#FEE8ED',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
  };

  const leftHalfStyle = {
    width: isSmallScreen ? '100%' : '50%',
    height: isSmallScreen ? 'auto' : '100vh',
    padding: isSmallScreen ? '2em' : '4em 2em 2em 5em',
    boxSizing: 'border-box',
  };

  const rightHalfStyle = {
    width: isSmallScreen ? '100%' : '50%',
    height: isSmallScreen ? 'auto' : '100vh',
    padding: isSmallScreen ? '2em' : '4em 5em 2em 2em',
    boxSizing: 'border-box',
  };

  const contactRow = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: '#7d1260',
    marginBottom: '1rem',
  };

  const textStyle = {
    color: '#7d1260',
    fontSize: '1rem',
  };

  const iconStyle = {
    color: '#7d1260',
    flexShrink: 0,
    marginTop: '0.2rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    border: '1px solid #ccc',
    fontSize: '1rem',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    color: '#7d1260',
    display: 'block',
    marginBottom: '0.5rem',
  };

  const buttonStyle = {
    padding: '0.75rem',
    backgroundColor: '#7d1260',
    color: '#fff',
    border: 'none',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
  };

  return (
    <div style={pageStyling}>
      {/* Left half: contact info and form */}
      <div style={leftHalfStyle}>
        <SectionDivider align="center">Contact Us</SectionDivider>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={contactRow}>
            <FiPhone style={iconStyle} />
            <span style={textStyle}>(208) 773-4627</span>
          </div>
          <div style={contactRow}>
            <FiMail style={iconStyle} />
            <span style={textStyle}>info@example.com</span>
          </div>
        </div>

        <div style={contactRow}>
          <FiMapPin style={iconStyle} />
          <span style={textStyle}>3904 E Mullan Ave # F, Post Falls, ID 83854</span>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ ...labelStyle, padding: '1rem 0 0 0' }}>Name</label>
            <div style={{ display: 'flex', gap: '0.5rem', flexDirection: isSmallScreen ? 'column' : 'row' }}>
              <input type="text" placeholder="First" style={{ ...inputStyle, flex: 1 }} />
              <input type="text" placeholder="Last" style={{ ...inputStyle, flex: 1 }} />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Email</label>
            <input type="email" placeholder="example@email.com" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Phone (optional)</label>
            <input type="tel" placeholder="xxx-xxx-xxxx" style={inputStyle} />
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea placeholder="Type your message ..." style={{ ...inputStyle, height: '100px', resize: 'vertical' }} />
          </div>

          <button type="submit" style={buttonStyle}>Submit</button>
        </form>
      </div>

      {/* Right half: map */}
      <div style={rightHalfStyle}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.223729024748!2d-116.92890592387084!3d47.70578067119808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5361c3b9485e2cf3%3A0x4f0463178e4ab589!2s3904%20E%20Mullan%20Ave%20%23%20F%2C%20Post%20Falls%2C%20ID%2083854!5e0!3m2!1sen!2sus!4v1715641111357!5m2!1sen!2sus"
          width="100%"
          style={{ height: isSmallScreen ? '50vh' : '80vh', border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}

export default ContactPage;
