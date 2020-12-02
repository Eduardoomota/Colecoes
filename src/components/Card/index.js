import { IconButton } from "@material-ui/core";

// STYLES
import {
  Container,
  IconFavorite,
  CardItem,
  CardItemMedia,
  CardItemContent,
  Navigation,
} from "./styles";

const Menu = (props) => {
  <Container>
    {props.data.map((char) => (
      <CardItem key={char.id}>
        <CardItemMedia image={char.image} title={char.name} />
        <CardItemContent>
          {char.name}
          <IconButton onClick={props.setFavorite(char)}>
            <IconFavorite active={props.isFavorite(char).toString()} />
          </IconButton>
        </CardItemContent>
      </CardItem>
    ))}
    <Navigation
      count={props.pagesCount}
      onChange={props.paginationChange}
      siblingCount={0}
      boundaryCount={1}
    />
  </Container>;
};

export default Menu;
