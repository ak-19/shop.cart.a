import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {getStore} from './state/store';
import ProductList from './components/productlist';

import Cart from './components/cart';
import Admin from './components/admin';
import Layout from './hoc/layout';
import './application.css';

class Application extends Component {
  render() {
    return (
      <Provider store={getStore()}>
          <Router>
              <Switch>
                <Layout>
                  <Route path="/" exact component={ProductList}/>
                  <Route path="/admin" exact component={Admin}/>
                  <Route path="/cart" exact component={Cart}/>
                </Layout>
              </Switch>
          </Router>
      </Provider>
    );
  }
}

export default Application;
