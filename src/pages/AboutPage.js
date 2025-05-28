function AboutPage() {
  const body = {
    backgroundColor: '#FEE8ED',
  };

  const missionSection = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5vw 5vw 5vw',
  };

  const missionStatement = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7d1260',
    textAlign: 'center',
    maxWidth: '700px',
    padding: '0 1rem',
  };

  const aboutContainer = {
    display: 'flex',
    flexWrap: 'wrap', // responsive wrapping
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '40px 20px',
    gap: '40px',
  };

  const about = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#7d1260',
    maxWidth: '500px',
    padding: '0 1rem',
  };

  const mapStyle = {
    width: '100%',
    maxWidth: '600px',
    height: '400px',
    border: 0,
  };

  return (
    <>
      <div style={body}>
        <div style={missionSection}>
          <div style={missionStatement}>
            <h1 style={{ fontWeight: 'bold', fontFamily: "'Fraunces', serif" }}>
              OUR MISSION IS TO SATISFY
            </h1>
            <h3
              style={{
                fontWeight: '100',
                fontFamily: 'DM Sans',
                marginBottom: '0',
                marginTop: '0',
              }}
            >
              At <b>Happy Nails Salon, </b>we offer expert care for your hands, feet, and overall well-being. 
              We believe you deserve a luxurious escape—where relaxation meets precision, and every manicure and pedicure is delivered 
              with the highest quality by our certified, experienced technicians.
            </h3>
            <h3
              style={{
                fontWeight: '100',
                fontFamily: 'DM Sans',
                marginBottom: '0',
                marginTop: '20px',
              }}
            >
              Our mission is to make our clients happy, one at a time.
            </h3>
          </div>
        </div>

        <div style={aboutContainer}>
          <div style={about}>
            <h1 style={{ fontWeight: 'bold', fontFamily: "'Fraunces', serif" }}>
              Who are we?
            </h1>
            <h3 style={{ fontWeight: '100', fontFamily: 'DM Sans' }}>
              Founded in 2006 by owner Nhung Nguyen, <b>Happy Nails Salon </b>in Post Falls, 
              Idaho, offers professional nail care services in a clean, relaxing environment. From manicures and pedicures to custom nail art, our friendly staff 
              ensures every client receives the highest quality service and care. Visit us for a pampering experience you won’t forget!
            </h3>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1747189627482!6m8!1m7!1sGPDKcGlWy5yQ1lTTugrokQ!2m2!1d47.71532900057929!2d-116.8952520127984!3f266.91516!4f0!5f0.7820865974627469"
            style={mapStyle}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Location"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
