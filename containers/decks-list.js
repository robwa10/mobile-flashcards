import React, { Component } from 'react';
import { StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  Text,
  AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import DeckInfoCard from '../components/deck-info-card';
import { addDeck, getDeck, loadData } from '../actions';

class DecksList extends Component {
  constructor(props) {
    super(props);
    this.state = { isReady: false }
  }

  componentDidMount() {
    this.props.dispatch(loadData())
    this.setState({ isReady:true })
  }

  mapDeckTitles() {
    let data = this.props.data;
    let myArray = [];
    for(let key in data) {
      myArray.push({
        key: key,
        cards: data[key]['questions'].length,
        questions: data[key]['questions'],
      })
    }
    return myArray
  }

  newCard = () => (this.props.dispatch(addDeck(this.state.text)));

  getCard = (title) => {
    this.props.dispatch(getDeck(title));
    this.props.navigation.navigate('Details');
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
        <TouchableHighlight onPress={() => this.props.navigation.navigate('AddDeck')}>
          <View style={styles.containerStyles}>
            <Text style={styles.titleStyles}>Add a deck</Text>
          </View>
        </TouchableHighlight>
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
    backgroundColor: '#FF8A65',
    paddingVertical: 30,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  titleStyles: {
    textAlign: 'center',
    fontSize: 24,
    color: '#212121',
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 18,
    color: '#212121',
  }
});
