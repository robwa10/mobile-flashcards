import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getDeckList } from '../actions';

class DecksList extends Component {
  mapDeckTitles() {
    let data = this.props.data
    let myArray = [];
    for(let key in data) {
      myArray.push({key: key})
    }
    return myArray
  }

  render() {
    return (
      <FlatList
        data={this.mapDeckTitles()}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    );
  }
}

const mapStateToProps = ({ data }) => ({
  data,
})

export default connect(mapStateToProps)(DecksList);
