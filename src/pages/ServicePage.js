import Foot from '../components/Foot';
import SectionDivider from '../components/SectionDivider';
import ServiceElement from '../components/ServiceElement';

function ServicePage() {
    const body = {
        backgroundColor: '#FEE8ED',
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
        label1="Classic Manicure" price1="20$" label2="Gel Manicure" price2="35$" label3="Get Polish Charge H/F" price3="25$/30$"
        label4="Nail Repairs" price4="$5 & up"
        imageURL="https://media.istockphoto.com/id/1397565854/photo/pink-elongated-nail-extension.jpg?b=1&s=612x612&w=0&k=20&c=U4mHQP-Bz7JrNm2K2jLdsjWs8fjmTyE3lzKriUry3R4="
        ></ServiceElement>

        <ServiceElement name="Pedicure" description="A rejuvenating beauty treatment focused on caring for the feet and enhancing the appearance of toenails, leaving you feeling pampered and polished." 
        label1="Sugar-Scrub Pedicure" price1="35$" label2="Foot-Mask Pedicure" price2="40$" label3="Callouse Buster Pedicure" price3="40$"
        label4="All Of The Above Spa Pedicure" price4="$50"
        imageURL="https://wallpapers.com/images/hd/pedicure-pictures-2qukz2q6yiw1nc82.jpg"
        ></ServiceElement>

        <ServiceElement name="Acrylic Nails" description="A transformative nail enhancement that adds length, strength, and elegance to your natural nails—perfectly shaped and beautifully polished to leave you feeling confident and stylish." 
        label1="Gel" price1="50$" label2="Acrylic" price2="45$" label3="Color Tip" price3="50$"
        label4="White Tip" price4="45$"
        
        imageURL="https://hdsalonandacademy.co.uk/wp-content/uploads/2023/08/Acrylic-nail-course-scaled-e1692182859580.jpg"
        ></ServiceElement>
        
    </div>
    <Foot></Foot> 
    </>

  );
}

export default ServicePage;