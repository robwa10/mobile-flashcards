import React, { Component } from 'react';
import { StyleSheet,
  FlatList,
  View,
  Text,
  Alert,
  AsyncStorage, } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';
import DeckInfoCard from '../components/deck-info-card';
import { addDeck, getDeck, loadData, deleteDeck, } from '../actions';
import { centerContent, blue, white, mainText, secondaryText, } from '../utils/styles';

class DecksList extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false }
  }

  getData() {
    AsyncStorage.getItem('state')
    .then(response => JSON.parse(response))
    .then(response => (response !== null ? this.props.dispatch(loadData(response)) : console.log('Null Response')))
    .then(this.setState({ isReady:true }))
  }

  componentDidMount() {
    // AsyncStorage.clear()
    this.getData()
    clearLocalNotification()
    .then(setLocalNotification())
  }

  mapDeckTitles() {
    let data = this.props.data;
    let myArray = [];
    for(let key in data) {
      myArray.push({
        key: key,
        cards: data[key]['questions'].length,
      })
    }
    return myArray
  }

  getCard = (title) => {
    this.props.navigation.navigate('Details', {title});
  };

  renderDeckCard = (item) => {
    return (
      <DeckInfoCard
        onPress={() => this.getCard(item.key)}
        title={item.key}
        cards={item.cards}
        containerStyles={styles.containerStyles}
        titleStyles={styles.titleStyles}
        textStyles={styles.textStyles}
      />
    )
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }
    return (
      <View style={styles.centerContent}>
        <FlatList
          data={this.mapDeckTitles()}
          renderItem={({item}) => this.renderDeckCard(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default connect(mapStateToProps)(DecksList);

const styles = StyleSheet.create({
  centerContent,
  containerStyles: {
    backgroundColor: white,
    paddingVertical: 30,
    marginVertical: 2,
  },
  titleStyles: {
    textAlign: 'center',
    fontSize: 24,
    color: mainText,
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 18,
    color: secondaryText,
  }
});
