import { useEffect, useState, Fragment } from "react";
import { useHistory } from "react-router-dom";

//STYLES
import {
  IconButton,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  MenuItem,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavBar, MenuList } from "./styles";

const Header = ({ setTheme }) => {
  const [value, setValue] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = !!anchorEl;
  const matches = useMediaQuery("(max-width:768px)");

  const history = useHistory();

  //SETTING THEME
  const settingTheme = (e) => {
    setSwitchValue(!switchValue);
  };

  useEffect(() => {
    switchValue ? setTheme(true) : setTheme(false);
  }, [switchValue, setTheme]);

  //MENU
  useEffect(() => {
    switch (value) {
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/pokemon");
        break;
      default:
        history.push("/favorites");
    }
    setAnchorEl(null);
  }, [value, history]);

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <NavBar>
      {matches ? (
        <Fragment>
          <IconButton color="inherit" aria-label="menu" onClick={openMenu}>
            <MenuIcon />
          </IconButton>

          <MenuList
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenu}
          >
            <MenuItem onClick={() => setValue(0)}>Rick And Morty</MenuItem>
            <MenuItem onClick={() => setValue(1)}>Pokemon</MenuItem>
            <MenuItem onClick={() => setValue(2)}>Favorites</MenuItem>
          </MenuList>
        </Fragment>
      ) : (
        <Tabs onChange={(e, index) => setValue(index)} value={value}>
          <Tab label="Rick And Morty" />
          <Tab label="Pokemon" />
          <Tab label="Favorites" />
        </Tabs>
      )}
      <FormControlLabel
        control={
          <Switch
            name="theme"
            color="primary"
            checked={switchValue}
            onChange={settingTheme}
          />
        }
        label={switchValue ? "Dark Mode" : "Light Mode"}
      />
    </NavBar>
  );
};

export default Header;
