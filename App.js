import './ReactotronConfig';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar, } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { saveState } from './utils/localStorage';
import { Constants } from 'expo';
import { blue } from './utils/styles';
import MainNavigator from './components/main-navigator';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

store.subscribe(throttle(() => {
  saveState({
    data: store.getState().data
  });
}, 1000));

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default App = () => (
  <Provider store={store}>
    <View style={{flex: 1}}>
      <UdaciStatusBar backgroundColor={blue} barStyle="light-content" />
      <MainNavigator />
    </View>
  </Provider>
);
