import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoritesThunk,
  removeToFavoritesThunk,
} from "../../store/thunks/favoritesThunk";
import axios from "axios";

import { IconButton } from "@material-ui/core";

// STYLES
import {
  Container,
  IconFavorite,
  CardItem,
  CardItemMedia,
  CardItemContent,
  Navigation,
} from "../../Global";

import { isFavorite } from "../../helpers";

const Pokemon = () => {
  const [countPages, setCountPages] = useState(0);
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    next: "",
    previous: "",
  });
  const [pageClicked, setPageClicked] = useState(1);
  const [baseURL, setBaseURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
  );
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);

  useEffect(() => {
    axios.get(baseURL).then((res) => {
      countPages === 0 && setCountPages(res.data.count / 30);
      setPagination({
        next: res.data.next,
        previous: res.data.previous,
      });
      setData(res.data.results);
    });
  }, [baseURL, countPages]);

  const setURL = (e, value) => {
    const { next, previous } = pagination;

    if (value > pageClicked && data.next !== null) {
      setPageClicked(value);
      setBaseURL(next);
      return;
    }

    if (value < pageClicked && data.previous !== null) {
      setPageClicked(value);
      setBaseURL(previous);
      return;
    }
  };

  const setFavorite = (card) => {
    let verify = isFavorite(card, favorites);

    if (verify === false) {
      dispatch(addToFavoritesThunk(card));
      return;
    }
    dispatch(removeToFavoritesThunk(card));
  };

  const getImage = (char) => {
    let setURL = char.url.split("/");
    let getImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${setURL[6]}.png`;
    return getImageURL;
  };

  const PokemonGenerator = (pokemon) => () => {
    let newInfo = {
      ...pokemon,
      id: Math.floor(Math.random() * 1000) + 700,
      image: getImage(pokemon),
    };

    setFavorite(newInfo);
  };

  return (
    <Container>
      {data.map((char) => {
        return (
          <CardItem key={Math.random()}>
            <CardItemMedia image={getImage(char)} title={char.name} />
            <CardItemContent>
              {char.name}
              <IconButton onClick={PokemonGenerator(char)}>
                <IconFavorite active={isFavorite(char, favorites).toString()} />
              </IconButton>
            </CardItemContent>
          </CardItem>
        );
      })}
      <Navigation
        count={countPages}
        onChange={setURL}
        siblingCount={0}
        boundaryCount={2}
      />
    </Container>
  );
};

export default Pokemon;
