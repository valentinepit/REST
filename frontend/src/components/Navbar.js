import React from 'react';
import logo from '../notes_logo.svg';
import {Link} from 'react-router-dom';



function Navbar({auth, logout}) {
    console.log("USERNAME =", auth)
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-5  active" aria-current="page" to='/'>
                                    <i className="fa-solid fa-house-user"></i>
                                    USERS&nbsp;
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-5" to='/todo'>TODO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white ms-5" to='/projects'>PROJECTS</Link>
                            </li>
                            <li className="nav-item">
                                {auth.is_auth ?
                                    <Link className="nav-link text-white ms-5" onClick={logout} to="/login">LOGOUT</Link> :
                                    <Link className="nav-link text-white ms-5" to='/login'>LOGIN</Link>}
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-primary" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;