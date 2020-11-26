import { Fragment, useState } from "react";
import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "../components/Header";

//PAGES
import RickAndMorty from "../pages/RickAndMorty";
import Pokemon from "../pages/Pokemon";
import Favorites from "../pages/Favorites";

const Routes = ({ setTheme }) => {
  const [addFavorite, setAddFavorite] = useState([]);

  return (
    <Fragment>
      <Header setTheme={setTheme} />
      <Switch>
        <Route exact path="/">
          <RickAndMorty
            setAddFavorite={setAddFavorite}
            addFavorite={addFavorite}
          />
        </Route>
        <Route exact path="/pokemon">
          <Pokemon setAddFavorite={setAddFavorite} addFavorite={addFavorite} />
        </Route>
        <Route exact path="/favorites">
          <Favorites
            addFavorite={addFavorite}
            setAddFavorite={setAddFavorite}
          />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
