import {AppPage} from "./app-page/index.js";
import {LogInPage} from "./login-page/index.js";
import {PageNotFound} from "./404/index.js";
import {ProtectedRoute} from "../process/index.js";
import {HeaderComponent} from "../shared/ui/header/header.jsx";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Route, Switch} from "react-router-dom";
import {getUser} from "../shared/helpers/utils/getUser.js";
import {User} from "../feature/login/index.js";

import {Button} from '../shared/ui/index.js'

export const Routing = () => {
  const dispatch = useDispatch();
  const user = useSelector(User.userSelector);

  useEffect(
    () => dispatch(User.actions.setUser(getUser())
  ), []);

  const header = () => (
    <HeaderComponent>
      <div className="w-100 d-flex justify-content-end">
        <Button className="ml-auto">Выйти</Button>
      </div>
    </HeaderComponent>
  )

  return (
    <>
      {user && header()}

      <Switch>
        {!user && <Route path="/auth" exact component={LogInPage}/>}
        <ProtectedRoute path="/" exact  component={AppPage}/>
        <Route path='*' component={PageNotFound} />
      </Switch>
    </>
  );
};
