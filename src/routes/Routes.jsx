// Third party imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Account from '../components/account/Account';
import Footer from '../components/footer/Footer';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/account/:id" exact component={Account} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
