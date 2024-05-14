import React from "react";
import '@styles/global.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import Home from "../pages/Home"; 
import Contact from "../pages/Contact"; 
import Header from "@components/Header"; 
import Footer from "@components/Footer"; 
import "@styles/global.css";
import Specialties from "../pages/Specialties";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/specialties">
            <Specialties />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
