import React from 'react'
import { NavLink } from 'react-router-dom';


const Comman = (props) => {
    return (
        <section className='section-hero'>
            <div>
                <h1>{props.title1}<span className='special'>{props.title2}</span> {props.title3} <br /></h1>
                <p className='sub-title'>{props.para}</p>
                <button className='btn btn-primary'><NavLink to={props.visit} className="text-dark text-decoration-none">{props.btnName}</NavLink></button>
            </div>
            <div>
                <img src={props.imgsrc} className='hero-img' alt='photo' />
            </div>
        </section>
    );
}

export default Comman
