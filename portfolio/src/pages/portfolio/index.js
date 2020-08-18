import React, { useState } from "react"
import "./style.css"
import Projects from "../../projects.json"


function Portfolio (){

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
                <div key={xproject.id}>
                <h1 >{xproject.name}</h1>
                <p>{xproject.description}</p>
                </div>
            ))}
                
            
           
        </div>
        
    );
}

export default Portfolio;