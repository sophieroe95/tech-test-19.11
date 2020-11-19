import React from "react";
import { Router } from "@reach/router";
import WeatherAppMain from '../../components/WeatherAppMain';
import Home from '../../components/Home';
import Football from '../../components/Football';
import Quiz from '../../components/Quiz';
// import NotFound from '../../components/NotFound';

const Routes = (props) => {
  return (
    <Router>
      <Home default />
      <WeatherAppMain path="weatherappmain"/>
      <Quiz path="quiz"/>
      <Football path="football"/>
    </Router>
  );
};

export default Routes;