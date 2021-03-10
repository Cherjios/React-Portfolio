import React from "react"
import "./style.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid jcolor">
                <div className="container title-center">
                    <h1 className="title-font titleh1">Sergio Lopez</h1>
                    <p className="ptitle">Thanks for visiting my website!</p>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid jcolor1">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/React-Portfolio/about" className="thisLink">
                                <h1 className="subh1 abt">About me!</h1>
                            </Link>
                    
                            <p className="subp">I got the certificate in full stack web developer at UC Berkeley Extension</p>
                        </div>
                        <div className="col-6 text-right plink">
                            <Link to="/React-Portfolio/portfolio" className="thisLink">
                                <h1 className="subh1 por">Portfolio</h1>
                            </Link>
                            <p className="subp">Take a look to the work that I have done!</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>






    );
}

export default Home;