import React from "react"
import "./style.css"
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container title-center">
                    <h1 className="display-4 font-weight-bolder title-font">Sergio Lopez</h1>
                    <p className="lead title-font">Thanks for visiting my website!</p>
                </div>
            </div>
            <div className="jumbotron jumbotron-fluid ">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Link to="/about">
                            <h1 className="">About me!</h1>
                            <p className="lead title-font">I am currently studying the web developer boot camp at Berkeley Extension!</p>
                            </Link>
                        </div>
                        <div className="col-6 text-right">
                            <Link to="portfolio">
                            <h1 className="">Portfolio</h1>
                            <p className="lead title-font">Take a look to the work that I have done!</p>
                            </Link>
                        </div>
                    </div>

                </div>

            </div>

        </div>






    );
}

export default Home;