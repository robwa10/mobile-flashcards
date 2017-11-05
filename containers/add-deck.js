import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import FormInput from '../components/form-input';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  buttonPress = () => {
    this.setState({ text: '' })
    this.props.dispatch(addDeck(this.state.text));
    this.props.navigation.goBack()
}

  render() {
    return (
      <View style={{padding: 10}}>
        <FormInput
          text="What's you new deck's title?"
          placeholder='Deck Title'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          textStyles={{fontSize: 20}}
          inputStyles={{height: 50, backgroundColor: '#fff'}}
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
