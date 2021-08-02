import { Component, Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import AppBar from "../AppBar/AppBar";

const Homepage = lazy(() =>
  import("../../view/Homepage/Homepage.js" /* webpackChunkName: "Homepage" */)
);
const MoviesPage = lazy(() =>
  import("../../view/MoviesPage" /* webpackChunkName: "MoviesPage" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "../../view/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);

class App extends Component {
  render() {
    return (
      <>
        <AppBar />

        <Suspense fallback={<b>Loading...</b>}>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route component={Homepage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
