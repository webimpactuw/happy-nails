// import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import HeroBanner from '../components/HeroBanner';
import Foot from '../components/Foot';

function HomePage() {

/*
 TODO:  
    - put heroBanner directly into HomePage
    - moving gallery
    - reviews
*/

  return (
    <>
    <NavBar></NavBar>
    <HeroBanner></HeroBanner>
    <Foot></Foot> 
    </>

  );
}

export default HomePage;