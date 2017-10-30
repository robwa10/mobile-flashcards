import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DeckInfoCard from '../components/deck-info-card';

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

  renderDeckCard = (item) => (
    <DeckInfoCard
      onPress={() => this.getCard(item.key)}
      title={item.key}
      cards={item.cards}
      parentStyles={styles.parentStyles}
      textStyles={styles.textStyles}
    />
  )

  getCard(title) {
    console.log(title);
  }

  render() {
    return (
      <FlatList
        data={this.mapDeckTitles()}
        renderItem={({item}) => this.renderDeckCard(item)}
      />
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default connect(mapStateToProps)(DecksList);

const styles = StyleSheet.create({
  parentStyles: {
    backgroundColor: '#FF8A65',
    paddingVertical: 20,
    marginHorizontal: 5,
    marginVertical: 2,
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 24,
    color: '#212121',
  }
});
