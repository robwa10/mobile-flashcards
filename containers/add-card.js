import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addCardToDeck } from '../actions';
import FormInput from '../components/form-input';
import {
  centerContent,
  formContainer,
  inputStyles,
  smallTextStyles,
  mainText, } from '../utils/styles';
import TextButton from '../components/text-button';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    }
  }


  buttonPress = () => {
    let title = this.props.navigation.state.params.title;
    console.log(title);
    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'Details', params: {title} })
      ]
    })
    this.props.dispatch(addCardToDeck(title, this.state));
    this.setState({ question: '', answer: '', });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.centerContent} behavior='padding'>
        <FormInput
          containerStyles={styles.formContainer}
          text='Question'
          placeholder='Why did the chicken cross the road?'
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          textStyles={[styles.smallTextStyles, {color: mainText}]}
          inputStyles={styles.inputStyles}
        />
        <FormInput
          containerStyles={styles.formContainer}
          text='Answer'
          placeholder='To get to the other side.'
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
          textStyles={[styles.smallTextStyles, {color: mainText}]}
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

const styles = StyleSheet.create({
  centerContent,
  formContainer,
  smallTextStyles,
  inputStyles,
});

export default connect()(AddCard);
