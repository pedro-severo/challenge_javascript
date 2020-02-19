import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { 
  MuiThemeProvider, 
  createGenerateClassName,
  CssBaseline, 
  jssPreset
} from "@material-ui/core";
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from "jss";
import theme from "../../style/theme";
import { createBrowserHistory } from "history";
import { createStore, applyMiddleware, compose } from "redux";
import { generateReducers } from "../../reducers";
import { routerMiddleware} from "connected-react-router";
import styled from 'styled-components';
import Router from "../Router";

export const MainStyled = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap"');
  font-family: 'Lato', sans-serif;
  margin: 0px;
`;

export const history = createBrowserHistory();

const generateClassName = createGenerateClassName();

const jss = create({
  ...jssPreset(),
  // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
  insertionPoint: document.getElementById("jss-insertion-point")
});

const middlewares = [
  applyMiddleware(routerMiddleware(history), thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
];

const store = createStore(generateReducers(history), compose(...middlewares));

export const App = () => (
  <Provider store={store}>
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainStyled>
          <Router history={history}/>
        </MainStyled>
      </MuiThemeProvider>
    </JssProvider>
  </Provider>
);

export default App;