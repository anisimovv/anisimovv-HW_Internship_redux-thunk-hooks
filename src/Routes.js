import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AddUserContainer from "./containers/AddUserContainer";
import UserListContainer from "./containers/UserListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/user-list" exact>
        <UserListContainer />
      </Route>
      <Route path="/add-user" exact>
        <AddUserContainer />
      </Route>
      <Route path="*">
        <Redirect to="/add-user" />
      </Route>
    </Switch>
  );
};

export default Routes;
