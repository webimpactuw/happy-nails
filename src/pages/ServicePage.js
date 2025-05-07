import Foot from '../components/Foot';
import SectionDivider from '../components/SectionDivider';
import ServiceElement from '../components/ServiceElement';

function ServicePage() {
    const body = {
        backgroundColor: '#FEE8ED',
        // height: '100vh',
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
        <SectionDivider title="Services"></SectionDivider>
        <ServiceElement name="Manicure" description="A luxurious hand treatment that includes nail shaping, cuticle care, skin softening, and a flawless polish finish—designed to leave your hands feeling smooth, elegant, and refreshed." 
        label1="Classic manicure" price1="20$" label2="Other services" price2="5-35$" imageURL="https://media.istockphoto.com/id/1397565854/photo/pink-elongated-nail-extension.jpg?b=1&s=612x612&w=0&k=20&c=U4mHQP-Bz7JrNm2K2jLdsjWs8fjmTyE3lzKriUry3R4="
        ></ServiceElement>

        <ServiceElement name="Pedicure" description="A rejuvenating beauty treatment focused on caring for the feet and enhancing the appearance of toenails, leaving you feeling pampered, polished, and refreshed." 
        label1="Sugar-scrub pedicure" price1="35$" label2="Foot-mask pedicure" price2="40$" imageURL="https://wallpapers.com/images/hd/pedicure-pictures-2qukz2q6yiw1nc82.jpg"
        ></ServiceElement>

        <ServiceElement name="Other customer favorites" description="" 
        label1="Waxing" price1="15-40$" label2="Volcano Luxury Spa" price2="55$" imageURL="https://hdsalonandacademy.co.uk/wp-content/uploads/2023/08/Acrylic-nail-course-scaled-e1692182859580.jpg"
        ></ServiceElement>
        
    </div>
    <Foot></Foot> 
    </>

  );
}

export default ServicePage;