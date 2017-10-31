import React, { Component } from 'react';
import { StyleSheet,
  FlatList,
  TouchableHighlight,
  View,
  Text } from 'react-native';
import { connect } from 'react-redux';
import DeckInfoCard from '../components/deck-info-card';
import { addDeck, getDeck } from '../actions';

class DecksList extends Component {
  mapDeckTitles() {
    let data = this.props.data;
    let myArray = [];
    for(let key in data) {
      myArray.push({
        key: key,
        cards: data[key]['questions'].length
      })
    }
    return myArray
  }

  newCard = () => (this.props.dispatch(addDeck(this.state.text)));

  getCard = (title) => {
    this.props.dispatch(getDeck(title));
    this.props.navigation.navigate('DeckScreen');
  };

  renderDeckCard = (item) => (
    <DeckInfoCard
      onPress={() => this.getCard(item.key)}
      title={item.key}
      cards={item.cards}
      containerStyles={styles.containerStyles}
      titleStyles={styles.titleStyles}
      textStyles={styles.textStyles}
    />
  )

  render() {
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
