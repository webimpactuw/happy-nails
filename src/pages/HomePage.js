import HeroBanner from '../components/HeroBanner';
import SlidingGallery from '../components/SlidingGallery';
import SectionDivider from '../components/SectionDivider'

function HomePage() {
  const sloganStyle = {
    backgroundColor: 'rgb(125, 18, 96)',
    color: 'rgb(256,256,256)',
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    fontFamily: "'Fraunces', serif" 
  }
  const galleryStyle = {
    backgroundColor: "#FEE8ED",
    padding: '2em',
  }
  return (
    <>
    <HeroBanner></HeroBanner>
    <div style={sloganStyle}>
      <h1 style={{margin:'0', padding: '3rem 0 0 0 ', fontWeight: '300', fontSize:'75px', fontStyle:'italic'}}>Be Bold. Be New. Be Happy</h1>
      <h2 style={{margin: '0', color: '#FF97AF', fontFamily:'DM Sans', fontWeight: '400', paddingBottom: '3rem'}}>Get a fresh set today and feel like your best self</h2>
    </div>
    <div style={galleryStyle}>
      <SectionDivider style={{margin: '0'}}>Gallery</SectionDivider>
      <SlidingGallery></SlidingGallery>
    </div>
    </>
  );
}

export default HomePage;