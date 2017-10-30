import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/localStorage';
import DecksList from './containers/decks-list';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(throttle(() => {
  saveState({
    data: store.getState().data
  });
}, 1000));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <DecksList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
