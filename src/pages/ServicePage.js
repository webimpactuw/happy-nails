import NavBar from '../components/NavBar';
import Foot from '../components/Foot';
import SectionDivider from '../components/SectionDivider';
import ServiceElement from '../components/ServiceElement';

function ServicePage() {
    const body = {
        backgroundColor: '#FEE8ED',
        height: '100vh',
        padding: '2em'
    }


/*
 TODO:  
    - put heroBanner directly into HomePage
    - moving gallery
    - reviews
*/

  return (
    <>
    <div style={body}>
        <SectionDivider align="right">Services</SectionDivider>
        <ServiceElement></ServiceElement>
    </div>
    <Foot></Foot> 
    </>

  );
}

export default ServicePage;