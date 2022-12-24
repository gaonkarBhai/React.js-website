import React from 'react'
import { NavLink } from 'react-router-dom';
import about from './images/about.jpg'


const Card = () => {
    return (
        <div className="card" id='card' >
            <img src={about} className="card-img-top" alt="photo" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
            </div>
        </div>
    );
}

export default Card
