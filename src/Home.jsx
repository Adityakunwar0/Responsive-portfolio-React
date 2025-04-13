// React Arrow Function Component with Export. 
import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import { useGlobalContext } from './Context';
import Services from './Services';
import Contact from './Contact';



const Home = () => {

  // const data = {
  //   name: "Aditya Kunwar",
  //   image: "./images/hero.svg",

  // }

  const {updateHomePage } = useGlobalContext();

  useEffect ( () => updateHomePage (), []);

  return (
    <>

    <HeroSection  />
    <Services />
   
    <Contact />
    
    </>
  )
}

export default Home