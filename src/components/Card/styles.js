import styled from "styled-components";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card, CardMedia, CardContent } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 110px 30px;
`;

export const IconFavorite = styled(FavoriteIcon)`
  fill: ${({ active, theme }) =>
    active === "true"
      ? `${theme.icon__active} !important`
      : `${theme.icon__disable} !important`};
`;

export const CardItem = styled(Card)`
  width: 22%;
  margin-bottom: 36px;

  div:nth-of-type(2) {
    background-color: ${({ theme }) => theme.card__background};
    color: ${({ theme }) => theme.card__color};
  }

  @media (max-width: 1150px) {
    width: 30%;
  }

  @media (max-width: 870px) {
    width: 46%;
  }

  @media (max-width: 550px) {
    width: 65%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }
`;

export const CardItemMedia = styled(CardMedia)`
  height: 300px;

  @media (max-width: 600px) {
    height: 250px;
  }
`;

export const CardItemContent = styled(CardContent)`
  padding: 20px !important;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Navigation = styled(Pagination)`
  ul li button,
  ul li div {
    color: ${({ theme }) => `${theme.pagination__color} !important`};
  }

  ul li button.Mui-selected {
    background-color: ${({ theme }) =>
      `${theme.pagination__selected} !important`};
  }
  ul li button svg {
    fill: ${({ theme }) => `${theme.pagination__color} !important`};
  }
`;
