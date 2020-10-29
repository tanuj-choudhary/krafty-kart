// Third party imports
import React from 'react';
import { Switch, Route, Redirect,HashRouter } from 'react-router-dom';

// Project imports
import Header from '../views/header';
import Home from '../views/home/Home';
import Account from "../components/account";
import Footer from '../components/footer/Footer';
import Products from "../components/products";
import Product from '../components/product';
import About from '../components/about/About';
import Signup from '../components/signup';
import Login from '../components/login';
import Profile from '../components/profile';
import Address from '../components/address';
import Cart from '../components/Cart';
import Orders from '../components/orders';
import Page404 from '../components/error/Page404';

import PrivateRoute from './PrivateRoute';
import CustomRoute from './CustomRoute';

function Routes() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" exact component={Product} />
        <Route path="/about" exact component={About} />
        <PrivateRoute path="/account" exact component={Account} />
        <PrivateRoute path="/account/profile" exact component={Profile} />
        <PrivateRoute path="/account/address" exact component={Address} />
        <PrivateRoute path="/cart" exact component={Cart} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <CustomRoute path="/signup" exact component={Signup} />
        <CustomRoute path="/login" exact component={Login} />
        <Route path="/Page404" exact component={Page404} />
        <Redirect to="/Page404" />
      </Switch>
      <Footer />
    </HashRouter>
  );
}

export default Routes;
