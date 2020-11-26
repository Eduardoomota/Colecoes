import styled from "styled-components";

import { AppBar, Menu } from "@material-ui/core";

export const NavBar = styled(AppBar)`
  background-color: ${({ theme }) => `${theme.navbar} !important`};
  flex-direction: row !important;
  height: 10vh;
  padding: 0 52px;
  justify-content: space-between;

  > div > div > span {
    background-color: #fff;
  }

  > div > div > div {
    height: 100%;
  }

  > label > span > span {
    color: ${({ theme }) => `${theme.switch__indicator} !important`};
  }

  > label > span > span.Mui-checked + span {
    background-color: ${({ theme }) =>
      `${theme.switch__background} !important`};
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }
`;

export const MenuList = styled(Menu)``;
