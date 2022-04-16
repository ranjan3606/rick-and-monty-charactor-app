import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/" className="fs-3 ubuntu navbar-brand" >
                    Rick & Monty <span className="text-primary"> Wiki</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="" className="nav-link"> 
                            Home
                        </NavLink>
                        <NavLink to="/episodes" className="nav-link">
                           Episodes
                        </NavLink>
                        <NavLink to="/location" className="nav-link">
                           Location
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
