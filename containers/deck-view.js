import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { getDeck } from '../actions';

class DeckView extends Component {
  buttonClick() {
    this.props.dispatch(getDeck('Javascript'));
  }

  render() {
    return (
      <View>
        <Text>Title</Text>
        <Text>Questions</Text>
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
