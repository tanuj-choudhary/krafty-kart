// Third party imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports
import Home from '../components/home';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
