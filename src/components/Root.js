/**
* @flow
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainWrapper from '../containers/MainWrapper';
import configureStore from '../configureStore';

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainWrapper />
      </Provider>
    );
  }
}

export default Root;
