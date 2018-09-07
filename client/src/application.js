import React, { Component } from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './state/reducers'
import './application.css';

class Application extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="application">
          Shop cart stub
        </div>
      </Provider>
    );
  }
}

export default Application;
