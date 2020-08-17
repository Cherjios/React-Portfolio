import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {

    return (


        <nav className="navbar navbar-light navbar-expand-md bg-faded justify-content-center navcolor1">
            <Link href="/" className="navbar-brand d-flex w-50 mr-auto"><samp className="text-white title-font">Sergio Lopez
        Murillo</samp></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className
                    ="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className
                    ="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className
                        ="nav-item">
                        <Link className
                            ="nav-link " href="/about"><span className
                                ="text-white">About</span></Link>
                    </li>
                    <li className
                        ="nav-item text-white">
                        <a className
                            ="nav-link" href="/portfolio"><span className
                                ="text-white">Portfolio</span></a>
                    </li>
                    <li className
                        ="nav-item text-white">
                        <Link className
                            ="nav-link" href="/resume" target="_blank"><span className
                                ="text-white">Resume</span></Link>
                    </li>
                </ul>
            </div>
        </nav>



    );


}

export default Navbar;