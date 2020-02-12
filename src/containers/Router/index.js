import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import DashboardPage from "../DashboardPage";

export const routes = {
    login: "/",
    dashboard: "/dashboard"
};

function Router(props) {
    return (
      <ConnectedRouter history={props.history}>
        <Switch>
          <Route exact path={routes.dashboard} component={DashboardPage} />
          <Route exact path={routes.login} component={LoginPage} />
        </Switch>
      </ConnectedRouter>
    );
};
  
export default Router;  