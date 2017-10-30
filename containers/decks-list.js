import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
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

  render() {
    return (
      <FlatList
        data={this.mapDeckTitles()}
        renderItem={({item}) => <DeckCard title={item.key} />}
      />
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default connect(mapStateToProps)(DecksList);
