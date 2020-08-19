import React from "react";
import { Link } from "react-router-dom";
import PDF from "../../Document/SergioLopez_Resume.pdf"
import "./style.css";

function Navbar() {

    return (


        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center ncolor">
            <Link to="/React-Portfolio/" className="navbar-brand d-flex w-50 mr-auto"><samp className="text-white title-font">Sergio Lopez
                Murillo</samp></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className
                    ="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className
                    ="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className
                        ="nav-item text-white mtext">
                        <Link className
                            ="nav-link " to="/React-Portfolio/about"><span className
                                ="text-white">About</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white mtext">
                        <Link className
                            ="nav-link" to="/React-Portfolio/portfolio"><span className
                                ="text-white">Portfolio</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white mtext">
                        <Link className
                            ="nav-link" to={PDF} target="_blank"><span className
                                ="text-white">Resume</span></Link>
                    </li>
                </ul>
            </div>
        </nav>

    );


}

export default Navbar;