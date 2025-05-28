const Footer = () => {
  return (
    <>
      <style>
        {`
          .footer-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 0 2rem;
            max-width: 1200px;
            margin: 0 auto;
            gap: 1rem;
          }

          .footer-section {
            flex: 1 1 0;
            padding: 0.2rem;
            box-sizing: border-box;
          }

          @media (max-width: 768px) {
            .footer-container {
              flex-direction: column;
            }

            .footer-section {
              text-align: inherit !important;
            }
          }
        `}
      </style>

      <footer style={styles.footer}>
        <div className="footer-container">
          {/* Left Section */}
          <div className="footer-section" style={{ textAlign: 'left' }}>
            <h3 style={styles.heading}>Hours</h3>
            <p style={styles.paragraph}>Mon - Fri: 10 AM - 7 PM</p>
            <p style={styles.paragraph}>Sa-Su: 10 AM - 5 PM</p>
          </div>

          {/* Middle Section */}
          <div className="footer-section" style={{ textAlign: 'center' }}>
            <h3 style={styles.heading}>Location</h3>
            <p style={styles.paragraph}>3904 E Mullan Ave #F</p>
            <p style={styles.paragraph}>Post Falls, ID 83854</p>
          </div>

          {/* Right Section */}
          <div className="footer-section" style={{ textAlign: 'right' }}>
            <h3 style={styles.heading}>Contact</h3>
            <p style={styles.paragraph}>208 773 4627</p>
            <p style={styles.paragraph}>happy@nails.com</p>
          </div>
        </div>

        <div style={styles.bottomBar}>
          <p style={styles.bottomText}>
            &copy; {new Date().getFullYear()} WEBIMPACT | All rights reserved | Terms of Service | Privacy
          </p>
        </div>
      </footer>
    </>
  );
};

const styles = {
  footer: {
    backgroundColor: '#7D1260',
    color: 'white',
    fontFamily: "'DM Sans', sans-serif",
  },
  heading: {
    fontSize: '1.2rem',
    marginBottom: '0.35rem',
    fontFamily: "'Fraunces', serif",
    fontStyle: 'italic',
    fontWeight: 'normal',
  },
  paragraph: {
    lineHeight: '1.2',
    margin: '0.2rem 0',
    fontWeight: 'normal',
    fontSize: '0.95rem',
    fontFamily: "'DM Sans', sans-serif",
  },
bottomBar: {
  marginTop: '0.5rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.3)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60px',
},
  bottomText: {
    fontSize: '0.9rem',
    margin: 0,
    fontFamily: "'DM Sans', sans-serif",
  },
};

export default Footer;
