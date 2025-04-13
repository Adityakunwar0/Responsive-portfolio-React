import React from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'
import { useEffect } from 'react'

const About = () => {

    // const data ={
    //     name:"Chotu Kunwar",
    //     image: "./images/about1.svg",

    // }
    const {updateAboutPage} = useGlobalContext();
    useEffect ( () => updateAboutPage(), []);



  return (
    <HeroSection  />
  )
}

export default About