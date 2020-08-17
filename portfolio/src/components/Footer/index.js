import React from "react"
import "./style.css"

function Footer (){

    return(
        <div class="footerColor">
        <div class="container">
          <div class="col-md-12  text-center m-2">
            <a class="m-4" href="https://github.com/Cherjios" target="_blank"><img
                src="https://img.icons8.com/material-sharp/48/000000/github.png" /></a>
            <a class="m-4" href="https://www.linkedin.com/in/sergio-lopez-81790579/" target="_blank"><img
                src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" /></a>
            <a class="m-4" href="https://twitter.com/SergioL08946225" target="_blank"><img
                src="https://img.icons8.com/ios-filled/50/000000/twitter.png" /></a>
            <a class="m-4" href="mailto:slopez0286@gmail.com?subject=Mail-frommy-Website" target="_blank"><img
                src="https://img.icons8.com/material-rounded/48/000000/important-mail.png" /></a>
          </div>
        </div>
      </div>
    );

}

export default Footer;