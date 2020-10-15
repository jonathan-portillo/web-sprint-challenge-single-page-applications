import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Components/Home";
import pizza from "./Components/pizza";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Food</Link>
          <h1>The KrustyCrab Pizza, Where our Slogan is:</h1>
          <h2>The KrustyCrab Pizza is the Pizza for you and me</h2>
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
