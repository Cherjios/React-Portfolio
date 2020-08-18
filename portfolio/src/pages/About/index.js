import React from "react";
import "./style.css"
import selfi from "../../img/selfi.jpeg"


function About() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 font-weight-bolder title-font">About me!</h1>
                    <p className="lead title-font">Thanks for visiting my website!</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src={selfi} className="thisImage" alt="about-me" />
                            <p className="ptext">Hi! My Name is <span className="text-success font-weight-bold">Sergio Lopez </span>, a software engineer base in the bay area. </p>
                            <p> I decided to get into the tech word because I like to challenge myself with new projects and I love  spend time with computers, so I decided to learn more about how to create softwares and applications on internet.</p>
                            <p className="ptext">I am currently studying the web developer boot camp at Berkeley Extension, I'll finish it at the end of August 2020.</p>
                            <p className="ptext">I finished the fundamental year at Holberton. I was trained in software engineering fundamentals, including low-level programming, DevOps, and high-level modern languages.</p>
                            <p className="ptext">I am current looking for an entry-level position where I can find opportunities to expand my knowledge and work on challenging projects.</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default About;
