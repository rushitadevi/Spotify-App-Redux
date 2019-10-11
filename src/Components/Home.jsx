import React from "react";
import { withRouter } from "react-router";
import MainPage from "./MainPage";
import DisplayMovies from "./DisplayMovies";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Album from "./Album";

class Home extends React.Component {
  state = {};
  render() {
    var RoutedNavigation = withRouter(MainPage);
    return (
      <>
        <Router>
          <RoutedNavigation />
        </Router>
      </>
    );
  }
}

export default Home;
