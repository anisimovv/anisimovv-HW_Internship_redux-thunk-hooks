import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "@material-ui/core";

import NavButtons from "../NavButtons/NavButtons";
import Routes from "../../Routes";
import { Provider } from "react-redux";
import { store } from "../../store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <Container maxWidth="sm">
          <NavButtons />
          <Routes />
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
