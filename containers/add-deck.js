import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  buttonPress = () => {
    this.setState({ text: '' })
    this.props.dispatch(addDeck(this.state.text));
    //this.props.navigation.navigate('Decks')
}

  render() {
    return (
      <View style={{padding: 10}}>
        <Text>What's you new deck's title?</Text>
        <TextInput
          style={{height: 40, backgroundColor: '#fff'}}
          placeholder='Deck Title'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
        />
        <Button
          onPress={() => this.buttonPress()}
          title='Submit'
          accessibilityLabel='Submit deck'
        />
      </View>
    )
  }
}

export default connect()(AddDeck);
