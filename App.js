import './ReactotronConfig';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import throttle from 'lodash/throttle';
import { saveState } from './utils/localStorage';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import DecksList from './containers/decks-list';
import DeckView from './containers/deck-view';
import AddDeck from './containers/add-deck';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
  ));

store.subscribe(() => {
  saveState({
    data: store.getState().data
  });
},);

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const HomeNavigator = TabNavigator({
  Home: {
    screen: DecksList,
    navigationOptions: {
      headerTitle: 'Home',
    }
  },
  New: {
    screen: AddDeck,
    navigationOptions: {
      headerTitle: 'New Deck',
    },
  },
});

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeNavigator,
  },
  Details: {
    screen: DeckView,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <UdaciStatusBar backgroundColor="#000" barStyle="light-content" />
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
