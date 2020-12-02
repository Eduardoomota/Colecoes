import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavoritesThunk,
  removeToFavoritesThunk,
} from "../../store/thunks/favoritesThunk";
import { isFavorite } from "../../helpers";
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

const RickAndMorty = () => {
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setData(res.data.results);
        page === 1 && setPagesCount(res.data.info.pages);
      });
  }, [page]);

  const setPagination = (event, value) => {
    setPage(value);
  };

  const setFavorite = (card) => () => {
    let verify = isFavorite(card, favorites);

    if (verify === false) {
      dispatch(addToFavoritesThunk(card));
      return;
    }
    dispatch(removeToFavoritesThunk(card));
  };

  return (
    <Container>
      {data.map((char) => (
        <CardItem key={char.id}>
          <CardItemMedia image={char.image} title={char.name} />
          <CardItemContent>
            {char.name}
            <IconButton onClick={setFavorite(char)}>
              <IconFavorite active={isFavorite(char, favorites).toString()} />
            </IconButton>
          </CardItemContent>
        </CardItem>
      ))}
      <Navigation
        count={pagesCount}
        onChange={setPagination}
        siblingCount={0}
        boundaryCount={1}
      />
    </Container>
  );
};

export default RickAndMorty;
