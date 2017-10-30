import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import DeckCard from '../components/deck-card';

class DecksList extends Component {

  mapDeckTitles() {
    let myArray = [];
    for(let key in this.props.data) {
      myArray.push({key: key})
    }
    return myArray
  }

  renderDeckCard = (item) => (
    <DeckCard
      onPress={() => this.getCard(item.key)}
      title={item.key}
      touchableStyles={styles.touchableStyles}
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
  touchableStyles: {
    backgroundColor: '#FF8A65',
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 10,
  },
  textStyles: {
    textAlign: 'center',
    fontSize: 24,
    color: '#212121',
    paddingVertical: 20,
  }
});
