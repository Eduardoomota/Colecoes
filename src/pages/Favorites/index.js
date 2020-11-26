import { IconButton } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

// STYLES
import {
  Container,
  IconFavorite,
  CardItem,
  CardItemMedia,
  CardItemContent,
} from "../../Global";
import { NoContent } from "./styles";

const Favorites = ({ addFavorite, setAddFavorite }) => {
  const removeFavorite = (char) => () => {
    setAddFavorite(addFavorite.filter((item) => item.name !== char.name));
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
      {addFavorite.length === 0 && (
        <NoContent>
          <Alert severity="warning">You don't have favorite cards. </Alert>
        </NoContent>
      )}
      {addFavorite.map((char) => (
        <CardItem key={char.id}>
          <CardItemMedia image={char.image} title={char.name} />
          <CardItemContent>
            {char.name}
            <IconButton onClick={removeFavorite(char)}>
              <IconFavorite active={isFavorite(char).toString()} />
            </IconButton>
          </CardItemContent>
        </CardItem>
      ))}
    </Container>
  );
};

export default Favorites;
