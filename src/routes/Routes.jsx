// Third party imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Project imports
import Header from '../components/header/Header';
import Home from '../components/home/Home';
import Account from '../components/account/Account';
import Footer from '../components/footer/Footer';
import Products from '../components/products/Products';
import Product from '../components/product/Product';
import About from '../components/about/About';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/account/:id" exact component={Account} />
        <Route path="/products" exact component={Products} />
        <Route path="/product/:id" exact component={Product} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
