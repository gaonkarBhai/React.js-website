// 23/12/2022

import React from 'react'
import { NavLink } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className='title'><span id='title'>Naveen</span></div>
                <div>
                    <ul>
                        <li><NavLink  activeClassName ="active-nav" to='/'>Home</NavLink></li>
                        <li><NavLink  to='/services'>Services</NavLink></li>
                        <li><NavLink  to='/about'>About</NavLink></li>
                        <li><NavLink  to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
