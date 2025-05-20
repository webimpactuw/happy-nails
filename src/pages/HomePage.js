// import React, { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import Foot from '../components/Foot';
import SlidingGallery from '../components/SlidingGallery';

function HomePage() {

/*
 TODO:  
    - put heroBanner directly into HomePage
    - moving gallery
    - reviews
*/

  return (
    <>
    <HeroBanner></HeroBanner>
    <SlidingGallery/>
    <Foot></Foot> 
    </>

  );
}

export default HomePage;