import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
                <div className="container-fluid" style={{ background: `linear-gradient(to right, #00d2ff, #3a7bd5)` }}>
                    <NavLink to="/" className="navbar-brand h5 text-white">EastVilla</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link text-white">Home</NavLink>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;