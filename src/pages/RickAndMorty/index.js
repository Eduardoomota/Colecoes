import { useEffect, useState } from "react";
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

const RickAndMorty = ({ setAddFavorite, addFavorite }) => {
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);
  const [data, setData] = useState([]);

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
    let verify = isFavorite(card);

    if (verify === false) {
      setAddFavorite([...addFavorite, card]);
      return;
    }

    setAddFavorite(addFavorite.filter((item) => item.name !== card.name));
  };

  const isFavorite = (card) => {
    const favoriteFilter = addFavorite.filter(
      (item) => item.name === card.name
    );

    if (favoriteFilter.length === 0) {
      return false;
    }

    return true;
  };

  return (
    <Container>
      {data.map((char) => (
        <CardItem key={char.id}>
          <CardItemMedia image={char.image} title={char.name} />
          <CardItemContent>
            {char.name}
            <IconButton onClick={setFavorite(char)}>
              <IconFavorite active={isFavorite(char).toString()} />
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
