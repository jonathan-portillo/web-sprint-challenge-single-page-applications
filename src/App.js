import React, { useState } from "react";
import {
  Route,
  Link,
  useParams,
  useRouteMatch,
  Switch,
} from "react-router-dom";
import Home from "./Components/Home";
import pizza from "./Components/pizza";

const App = () => {
  return (
    <>
      <div className="App">
        <div class="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Food</Link>
          <h1>
            The Kruusssssttttyy CRAAAAAAAAAAAAAAAB PIZZZZZZAA ISSS THE
            PIZZAAAAAAA FOR YOUUUUU AND ME
          </h1>
        </div>
        <Switch>
          <Route path="/pizza" component={pizza} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </>
  );
};
export default App;
