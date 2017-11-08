import React, { Component } from 'react';
import { StyleSheet,
  FlatList,
  View,
  Text,
  Alert,
  AsyncStorage, } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import DeckInfoCard from '../components/deck-info-card';
import { addDeck, getDeck, loadData, deleteDeck, } from '../actions';
import { blue, mainText, secondaryText, } from '../utils/colors';

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
    this.getData()
  }

  mapDeckTitles() {
    let data = this.props.data;
    let myArray = [];
    for(let key in data) {
      myArray.push({
        key: key,
        cards: data[key]['questions'].length,
        questions: data[key]['questions'],
        correct: 0,
        currentCard: 0,
      })
    }
    return myArray
  }

  getCard = (item) => {
    this.props.dispatch(getDeck(item));
    this.props.navigation.navigate('Details', {item});
  };

  renderDeckCard = (item) => {
    return (
      <DeckInfoCard
        onPress={() => this.getCard(item)}
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
      <View>
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
  containerStyles: {
    backgroundColor: '#FFF',
    paddingVertical: 30,
    marginHorizontal: 5,
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
