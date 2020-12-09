import { Route, Switch } from "react-router-dom";

// import { Container } from './styles';
import Home from "./pages/Home";
import About from "./pages/About";
import Favs from "./pages/Favs";
import Configs from "./pages/Configs";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/favs" component={Favs} />
      <Route path="/configs" component={Configs} />
      <Route path="*" component={() => <h1>404 - Not Found</h1>} />
    </Switch>
  );
}

export default Routes;
