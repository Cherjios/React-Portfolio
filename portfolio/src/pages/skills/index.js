import React from "react"
import "./style.css"

function Skills (){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid jcolor">
                <div className="container text-center">
                    <h1 className="font-weight-bolder title-font ah1"> Technical Skills</h1>
                    {/* <p className="ap1">Take a look to the work that I have done!</p> */}
                </div>    
            </div>

            <div className="container bjdk">
            <h3 className="titleSk">Languages</h3>
            <p className="subtitle">JavaScript, Python, Bash, Cascading Style Sheets (CSS), HTML5.</p>

            <h3 className="titleSk">Applications</h3>
            <p className="subtitle"> AJAX, API, Bootstraps, Express.js, Git, GitHub, Heroku, jQuery, JSON, Node.js, Object-oriented Programming (OOP), Rest API, SQL, React, JSX, Mongo DB, Mongoose ODM, MySQL, ORM, Sequelize.</p>
            <br />
            </div>

        </div>

    )
}

export default Skills;