import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Notes from "../Notes";
import Note from "../Note";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} component={Notes} path={"/"} />
      <Route path={"/:id"} component={Note} />
    </Switch>
  </BrowserRouter>
);
