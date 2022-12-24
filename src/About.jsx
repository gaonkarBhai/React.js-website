import React from 'react'
import about from './images/about.jpg'

import Comman from './Comman';

const About = () => {
    return (
        <Comman title1="Know More " title2="About" title3="Us" para="Grow Your Business With Us" visit='/contact' btnName="Contact Us"imgsrc={ about } />
    );
}

export default About
