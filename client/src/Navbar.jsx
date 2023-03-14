import React from 'react';

function Navbar() {
    return <nav className="navbar navbar-light fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#j">My Blogs</a>
            <div id="navbarText">
                <a className="nav-link me-3" href="#j">Home</a>
                <a className="nav-link me-3" href="#j">About</a>
                <a className="nav-link me-3" href="#j">Login</a>
                <a className="nav-link" href="#j">Register</a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLightNavbar" aria-controls="offcanvasLightNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-light" tabIndex="-1" id="offcanvasLightNavbar" aria-labelledby="offcanvasLightNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasLightNavbarLabel">My Blogs</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#j">Fashion</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#j">Travel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#j">Food</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#j">Technology</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#j">Photography</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#j" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-Light">
                                <li><a className="dropdown-item" href="#j">Action</a></li>
                                <li><a className="dropdown-item" href="#j">Another action</a></li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li><a className="dropdown-item" href="#j">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;