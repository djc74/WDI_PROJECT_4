import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import UpliftsIndex from '../uplifts/UpliftsIndex';
import UpliftsShow from '../uplifts/UpliftsShow';
import UpliftsNew from '../uplifts/UpliftsNew';
import UserIndex from '../users/UserIndex';
import UserShow from '../users/UserShow';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users/:id" component={UserIndex} />
      <Route path="/uplifts/:id" component={UserShow} />
      <Route path="/uplifts/new" component={UpliftsNew} />
      <Route path="/uplifts/:id" component={UpliftsShow} />
      <Route exact path="/" component={UpliftsIndex} />
    </Switch>
  );
};

export default Routes;
