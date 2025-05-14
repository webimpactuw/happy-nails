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
        padding: '4em 5em 2em 5em', 
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
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <label style={labelStyle}>Name</label>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
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
            
        </div>
    );
}

export default ContactPage;