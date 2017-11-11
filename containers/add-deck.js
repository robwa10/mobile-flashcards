import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import FormInput from '../components/form-input';
import { blue, mainText } from '../utils/styles';
import TextButton from '../components/text-button';

class AddDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' }
  }

  buttonPress = () => {
    let title = this.state.text
    this.props.dispatch(addDeck(title));
    this.props.navigation.navigate('Details', {title});
    this.setState({ text: '' })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <FormInput
          containerStyles={styles.containerStyles}
          text="What's your new deck's title?"
          placeholder='Deck Title'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          textStyles={styles.textStyles}
          inputStyles={styles.inputStyles}
        />
        <TextButton
          onPress={() => this.buttonPress()}
          buttonText='Submit'
        />
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddDeck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  containerStyles: {marginBottom: 10},
  textStyles: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },
  inputStyles: {
    fontSize: 20,
    height: 50,
    backgroundColor: '#fff',
    textAlign: 'center'
  },
});
