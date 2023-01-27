import React, { useContext } from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/GlobalStyles";
import dark from "./styles/themes/dark";
import Routing from "./routes";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
};

export default App;
