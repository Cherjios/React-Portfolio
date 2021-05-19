import React from "react"
import "./style.css"

function Footer (){

    return(
        <div className="footerColor">
        <div className="container">
          <div className="col-md-12  text-center m-2">
            <a className="m-4 p-2" href="https://github.com/Cherjios" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/github.png"alt="githubicon" /></a>
            <a className="m-4 p-2" href="https://www.linkedin.com/in/sergio-lopez-81790579/" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="Linkedicon" /></a>
            <a className="m-4 p-2" href="https://twitter.com/SergioL08946225" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="twitterIcon"/></a>
            <a className="m-4 p-2" href="mailto:slopez0286@gmail.com?subject=Mail-frommy-Website" target="_blank rel=noopener"><img
                src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png" alt="mailIcon" /></a>
            

          </div>
        </div>
      </div>
    );

}

export default Footer;