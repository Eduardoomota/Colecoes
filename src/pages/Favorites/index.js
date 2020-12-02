import { isFavorite } from "../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { removeToFavoritesThunk } from "../../store/thunks/favoritesThunk";

// STYLES
import { IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {
  Container,
  IconFavorite,
  CardItem,
  CardItemMedia,
  CardItemContent,
} from "../../Global";
import { NoContent } from "./styles";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(({ favorites }) => favorites);

  return (
    <Container>
      {favorites.length === 0 && (
        <NoContent>
          <Alert severity="warning">You don't have favorite cards. </Alert>
        </NoContent>
      )}
      {favorites.map((char) => (
        <CardItem key={char.id}>
          <CardItemMedia image={char.image} title={char.name} />
          <CardItemContent>
            {char.name}
            <IconButton onClick={() => dispatch(removeToFavoritesThunk(char))}>
              <IconFavorite active={isFavorite(char, favorites).toString()} />
            </IconButton>
          </CardItemContent>
        </CardItem>
      ))}
    </Container>
  );
};

export default Favorites;
