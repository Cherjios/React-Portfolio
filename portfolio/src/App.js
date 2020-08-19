import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import About from "./pages/About"
import Portfolio from "./pages/portfolio"
import Home from "./pages/home"


function App() {
  return (
    <Router>
  
      <Navbar />
      <br />
      <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <br/>
      <Footer  />
  
    </Router>


  );

}

export default App;
