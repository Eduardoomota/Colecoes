import { Fragment, useState } from "react";

import Routes from "./Routes";
import { GlobalStyle } from "./Global";
import { lightTheme, darkTheme } from "./Themes";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = useState(false);

  return (
    <Fragment>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Routes setTheme={setTheme} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
