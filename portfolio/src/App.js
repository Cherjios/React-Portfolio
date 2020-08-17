import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      </Wrapper>
      <Footer  />
    </div>
    </Router>


  );

}

export default App;
