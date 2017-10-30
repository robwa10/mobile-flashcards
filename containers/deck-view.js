import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';

class DeckView extends Component {
  render() {
    const { deck } = this.props;
    return (
      <View>
        <Text>{deck['title']}</Text>
        <Text>{deck['questions'].length}</Text>
        <Button
          onPress={console.log('Add Card')}
          label='Add Card'
        />
        <Button
          onPress={console.log('Start Quiz')}
          label='Start Quiz'
        />
      </View>
    )
  }
}

const mapStateToProps = ({ deck }) => {
  deck,
}

export default connect(mapStateToProps)(DeckView);
