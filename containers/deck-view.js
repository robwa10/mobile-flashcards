import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

class DeckView extends Component {
  buttonClick() {
    console.log('I pressed a button');
  }

  render() {
    return (
      <View>
        <Text>{this.props.deck.key}</Text>
        <Text>{this.props.deck.cards} cards</Text>
        <Button
          onPress={() => this.buttonClick()}
          title='Add Card'
          accessibilityLabel='Add a new card.'
        />
        <Button
          onPress={() => this.buttonClick()}
          title='Start Quiz'
          accessibilityLabel='Start the quiz.'
        />
      </View>
    )
  }
}

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(DeckView);
