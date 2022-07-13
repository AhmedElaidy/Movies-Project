import "./App.css";
import HomePage from "./components/home/HomePages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./components/watch/SinglePage";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import React from "react";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/singlepage/:id" component={SinglePage} exact />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
