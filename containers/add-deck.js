import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import FormInput from '../components/form-input';
import { blue, mainText } from '../utils/colors';
import TextButton from '../components/text-button';

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
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <FormInput
          containerStyles={{marginBottom: 10}}
          text="What's your new deck's title?"
          placeholder='Deck Title'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          textStyles={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}
          inputStyles={{fontSize: 20, height: 50, backgroundColor: '#fff', textAlign: 'center'}}
        />
        <TextButton
          onPress={() => this.buttonPress()}
          buttonText='Submit'
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});

export default connect()(AddDeck);
