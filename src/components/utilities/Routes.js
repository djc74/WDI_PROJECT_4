import React from 'react';
import { Route, Switch } from 'react-router-dom';

import UpliftsIndex from '../uplifts/UpliftsIndex';
import UpliftsShow from '../uplifts/UpliftsShow';
import UserUpliftsIndex from '../useruplifts/UserUpliftsIndex';
import UserUpliftsShow from '../useruplifts/UserUpliftsShow';

const Routes = () => {
  return (
    <Switch>
      <Route path="/useruplifts/:id" component={UserUpliftsShow} />
      <Route exact path="/useruplifts" component={UserUpliftsIndex} />
      <Route path="/uplifts/:id" component={UpliftsShow} />
      <Route exact path="/" component={UpliftsIndex} />
    </Switch>
  );
};

export default Routes;
