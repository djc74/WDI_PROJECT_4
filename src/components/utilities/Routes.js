import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import UpliftsIndex from '../uplifts/UpliftsIndex';
import UpliftsShow from '../uplifts/UpliftsShow';
import UserUpliftsIndex from '../useruplifts/UserUpliftsIndex';
import UserUpliftsShow from '../useruplifts/UserUpliftsShow';
import UserUpliftsNew from '../useruplifts/UserUpliftsNew';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/useruplifts/new" component={UserUpliftsNew} />
      <Route path="/useruplifts/:id" component={UserUpliftsShow} />
      <Route exact path="/useruplifts" component={UserUpliftsIndex} />
      <Route path="/uplifts/:id" component={UpliftsShow} />
      <Route exact path="/" component={UpliftsIndex} />
    </Switch>
  );
};

export default Routes;
