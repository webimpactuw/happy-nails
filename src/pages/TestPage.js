import HeroBanner from '../components/HeroBanner';
import NavBar from '../components/NavBar';
import Foot from '../components/Foot';
import SectionDivider from '../components/SectionDivider';



function TestPage() {

  return (
    <div>
      <NavBar></NavBar>
      <HeroBanner></HeroBanner>
      <Foot></Foot>
      <h2>
        fdjgsfgsdfg
      </h2> 
      <SectionDivider title='blah' align='left'></SectionDivider>
    </div>
  );
}

export default TestPage;