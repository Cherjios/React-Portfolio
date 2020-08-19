import React from "react"
import "./style.css"
import Project from "../../projects.json"



function Portfolio() {

    // const [project] = useState(Projects);

    return (
        <div>
            <div className="jumbotron jumbotron-fluid jcolor">
                <div className="container text-center">
                    <h1 className="font-weight-bolder title-font ah1">Portfolio</h1>
                    <p className="ap1">Take a look to the work that I have done!</p>
                </div>
            </div>
            <div className="container bjdk">
                {Project.map((xproject) => (
                    <div>

                        <div className="row">
                            <div className="col"><h1 className="titlep" >{xproject.name}</h1> </div>
                        </div>
                        <div className="row">
                            <div className="col-md-auto col-lg-6" key={xproject.id}>
                                <img src={xproject.img} alt={xproject.name} className="img" />
                            </div>
                            <div className="col-md-auto col-lg-6 box">
                                <p className="ptext">{xproject.description}</p>
                                <div className="links">
                                    <a href={xproject.deployedLink} target="_blank rel=noopener" className="btn btn-dark">Deployed version</a>
                                    <a className="m-4" href={xproject.githubLink} target="_blank rel=noopener">
                                        <img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="githubicon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />

                    </div>

                ))}
            </div>
        </div>

    );
}

export default Portfolio;