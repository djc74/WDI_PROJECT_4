import React from 'react';
import { Route, Switch } from 'react-router-dom';


import UpliftsIndex from '../uplifts/UpliftsIndex';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={UpliftsIndex} />
    </Switch>
  );
};

export default Routes;
