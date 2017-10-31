import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { loadState, saveState } from './utils/localStorage';
import { TabNavigator, StackNavigator } from 'react-navigation';
import DecksList from './containers/decks-list';
import DeckView from './containers/deck-view';
import AddDeck from './containers/add-deck';

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

const HomeScreen = () => (
  <DecksList />
);

const DeckScreen = () => (
  <DeckView />
);

const NewDeck = () => (
  <AddDeck />
)
const Tabs = TabNavigator({
  Decks: {
    screen: DecksList,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      headerTitle: 'New Deck',
    }
  },
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  DeckScreen: {
    screen: DeckScreen,
    navigationOptions: {
      headerTitle: 'Deck',
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
