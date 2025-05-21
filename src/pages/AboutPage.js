import SectionDivider from "../components/SectionDivider";
import Foot from "../components/Foot";

function AboutPage() {

  const body = {
    backgroundColor: '#FEE8ED',
  }
  const missionSection = {
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center',
    padding: '100px'
  }
  
  const missionStatement = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent: 'center',
    color: '#7d1260',
    textAlign: 'center',
    height: "300px",
    width: "500px"
  }

  const aboutContainer = {
    display: 'flex',
    displayDirection: 'row',
    backgroundColor: 'white',
    alignItem: 'center',
    justifyContent: 'center',
    padding: '40px',
    
  }

  const about = {
    display: 'flex',
    flexDirection: 'column',
    alignItem: 'center',
    justifyContent: 'center',
    color: '#7d1260',
    width: '500px',
    height: '400px',
    paddingRight: '100px'
  }

  return (
    <>
    <div style={body}>
      <div style={missionSection}>
        <div style={missionStatement}>
          <h1 style={{fontWeight:'300', fontFamily: "'Fraunces', serif"}}>OUR MISSION IS TO SATISFY</h1>
          <h3 style={{fontWeight: '100', fontFamily: "DM Sans",
            marginBottom: '0', marginTop:'0'}}>At <b>Happy Nails Salon, </b>we offer expert care for your hands, feet, and overall well-being. 
            We believe you deserve a luxurious escape—where relaxation meets precision, and every manicure and pedicure is delivered 
            with the highest quality by our certified, experienced technicians.</h3>
            <h3 style={{fontWeight: '100', fontFamily: "DM Sans", marginBottom: '0', marginTop:'21.440px'}}>Our mission is to make our clients happy, one at a time.</h3>
        </div>
      </div>
      <div style={aboutContainer}>
        <div style={about}>
          <SectionDivider align="left">About Us</SectionDivider>
          <h3 style={{fontWeight:'100', fontFamily: "DM Sans"}}>Founded in 2006 by owner Nhung Nguyen, <b>Happy Nails Salon </b>in Post Falls, 
            Idaho, offers professional nail care services in a clean, relaxing environment. From manicures and pedicures to custom nail art, our friendly staff 
            ensures every client receives the highest quality service and care. Visit us for a pampering experience you won’t forget!</h3>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1747189627482!6m8!1m7!1sGPDKcGlWy5yQ1lTTugrokQ!2m2!1d47.71532900057929!2d-116.8952520127984!3f266.91516!4f0!5f0.7820865974627469" 
        style={{width:"600px", height:"400px", border: "0", allowfullscreen:"", loading:"lazy", referrerpolicyL:"no-referrer-when-downgrade"}}></iframe>
      </div>
    </div>
    <Foot></Foot> 
    </>

  );
}

export default AboutPage;