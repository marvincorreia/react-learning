import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/test" component={Test} />
    </Switch>
  );
}
