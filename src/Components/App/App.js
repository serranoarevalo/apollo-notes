import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "../Notes";
import Note from "../Note";
import Add from "../Add";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} component={Notes} path={"/"} />
      <Route path={"/add"} component={Add} />
      <Route path={"/note/:id"} component={Note} />
    </Switch>
  </BrowserRouter>
);
