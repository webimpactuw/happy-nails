import SectionDivider from '../components/SectionDivider';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';


function ContactPage() {

    const pageStyling = {
        backgroundColor: '#FEE8ED',
        minHeight: '100vh',
        display: 'flex'
    };

    const halfStyle = {
        width: '50%', 
        height: '100vh', 
        padding: '1em', 
        boxSizing: 'border-box'
    };

    const contactRow = {
        display: 'flex',
        alignItems: 'flex-start', 
        gap: '0.5rem', 
        color: '7d1260',
        marginBottom: '1rem',
        maxWidth: '300px'
    };

    const textStyle = {
        color: '#7d1260',
        fontSize: '1rem',
        marginBottom: '1rem',
      };    

    const iconStyle = {
        color: '#7d1260',
        flexShrink: 0,
        marginTop: '0.2rem'    
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
            <div style={halfStyle}>
                <SectionDivider align="center">Contact Us</SectionDivider>
                <p style={textStyle}>
                    Feel free to use this form, send us an email, or give us a call
                </p>

                <div style={contactRow}>
                    <FiPhone style={iconStyle} />
                    <span style={textStyle}>
                        (208) 773-4627
                    </span>
                </div>

                <div style={contactRow}>
                    <FiMapPin style={iconStyle} />
                    <span style={textStyle}>
                        3904 E Mullan Ave # F, Post Falls, ID 83854
                    </span>
                </div>
            </div>
            
            <div style={halfStyle}>
            </div>
            
        </div>
    );
}

export default ContactPage;