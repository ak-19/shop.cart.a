import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {getStore} from './state/store';
import ProductList from './components/productlist';
import './application.css';

class Application extends Component {
  render() {
    return (
      <Provider store={getStore()}>
        <ProductList/>
      </Provider>
    );
  }
}

export default Application;
