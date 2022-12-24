import React from 'react'
import hero from './images/hero.jpg'
import Comman from './Comman';

const Home = () => {
    return (
        <Comman title1="Start Your " btnName="Get Started" title2="Business" title3="With Us" para="We Are The People Who Always Stay With You" visit='/Services' imgsrc={hero} />
    );
}

export default Home
