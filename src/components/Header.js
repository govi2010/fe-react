import React from "react";
import logo from '../assets/img/logo.png';
import Scrollspy from 'react-scrollspy'

const Header = (props) => {
    return (
        <header className="header">
            <div className=" container">
                <nav className="navbar col-menu navbar-expand-md d-flex justify-content-between">
                    <a className="navbar-brand" href='#'>
                        <img className="logo" src={logo}/>
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <i className="fa fa-align-justify"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <div className="iner-menu">
                            <ul className="navbar-nav">
                                <Scrollspy items={['banner','How-it-Works', 'AboutUs', 'contactUs']} currentClassName="active">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#banner">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#How-it-Works">How it works?</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#AboutUs">About</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="#contactUs">Contact Us</a>
                                    </li>
                                </Scrollspy>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default Header;
