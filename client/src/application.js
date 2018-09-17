import React, { Component } from 'react';
import {Provider} from 'react-redux';

import {getStore} from './state/store';
import ProductList from './components/productlist';
import AddProduct from './components/addproduct';
import Layout from './hoc/layout';

import './application.css';

class Application extends Component {
  render() {
    return (
      <Provider store={getStore()}>
        <Layout>
          <AddProduct  className="col-12 col-md-6"/>
          <ProductList/>
        </Layout>
      </Provider>
    );
  }
}

export default Application;
