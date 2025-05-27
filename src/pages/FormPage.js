function FormPage() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    background: 'linear-gradient(135deg, #fcb69f, #f8d0c5, #f9c4d2)',
    minHeight: '100vh',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '1000px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    boxSizing: 'border-box',
  };

  const iframeStyle = {
    width: '100%',
    minHeight: '1000px',
    border: 'none',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCsg-_MDOfzzWiVV2y3ScUDZV6eHw8k4KUawHNseFa-8g-8A/viewform?embedded=true"
          title="Form"
          style={iframeStyle}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default FormPage;
