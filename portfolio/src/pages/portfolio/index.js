import React, { useState } from "react"
import "./style.css"
import Projects from "../../projects.json"



function Portfolio() {

    const [project] = useState(Projects);

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 font-weight-bolder title-font">Portfolio</h1>
                    <p className="lead title-font">Take a look to the work that I have done!</p>
                </div>
            </div>
            {project.map((xproject) => (
                <div className="container" key={xproject.id}>
                    <h1 >{xproject.name}</h1>
                    <img src={xproject.img} alt={xproject.name} className="img" />
                    <div className="box">
                        <p>{xproject.description}</p>
                        <div className="links">
                            <a href={xproject.deployedLink} target="_blank" class="btn btn-dark">Deployed version</a>
                            <a class="m-4" href={xproject.githubLink} target="_blank">
                                <img src="https://img.icons8.com/material-sharp/48/000000/github.png" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}



        </div>

    );
}

export default Portfolio;