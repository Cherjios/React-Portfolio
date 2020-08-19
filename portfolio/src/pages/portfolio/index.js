import React from "react"
import "./style.css"
import Project from "../../projects.json"



function Portfolio() {

    // const [project] = useState(Projects);

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container text-center">
                    <h1 className="display-4 font-weight-bolder title-font">Portfolio</h1>
                    <p className="lead title-font">Take a look to the work that I have done!</p>
                </div>
            </div>
            <div className="container">
                {Project.map((xproject) => (
                    <div className="row">
                        <div className="col" key={xproject.id}>
                            <h1 >{xproject.name}</h1>
                            <img src={xproject.img} alt={xproject.name} className="img" />
                            <div className="box">
                                <p>{xproject.description}</p>
                                <div className="links">
                                    <a href={xproject.deployedLink} target="_blank rel=noopener" className="btn btn-dark">Deployed version</a>
                                    <a className="m-4" href={xproject.githubLink} target="_blank rel=noopener">
                                        <img src="https://img.icons8.com/material-sharp/48/000000/github.png" alt="githubicon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}
            </div>
        </div>

    );
}

export default Portfolio;