// Third party imports
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../utils/store';

// Project imports
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Account from "../components/account";
import Footer from '../components/footer/Footer';
import Products from '../components/products/Products';
import Product from '../components/product/Product';
import About from '../components/about/About';
import Signup from '../components/signup';
import Login from '../components/login';
import PrivateRoute from './PrivateRoute';
import CustomRoute from './CustomRoute';

function Routes() {
  return (
    <ConnectedRouter history={history}>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/about" exact component={About} />
        <PrivateRoute path="/account" exact component={Account} />
        <CustomRoute path="/signup" exact component={Signup} />
        <CustomRoute path="/login" exact component={Login} />
      </Switch>
      <Footer />
    </ConnectedRouter>
  );
}

export default Routes;
