import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";

//PAGES
import RickAndMorty from "../pages/RickAndMorty";
import Pokemon from "../pages/Pokemon";
import Favorites from "../pages/Favorites";

const Routes = ({ setTheme }) => {
  return (
    <>
      <Header setTheme={setTheme} />
      <Switch>
        <Route exact path="/">
          <RickAndMorty />
        </Route>
        <Route exact path="/pokemon">
          <Pokemon />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
