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
      questionTitle: 'Question',
      answerTitle: 'Answer',
    }
  }

  validateQuestion = () => {
    let question = this.state.question;
    if ( question === '' || question.length < 3) {
      this.setState({
        questionTitle: "YOU NEED A QUESTION!",
      });
    } else {
      this.setState({
        questionTitle: 'Question',
      });
      return true;
    }
  }

  validateAnswer = () => {
  let answer = this.state.answer;
    if ( answer === '' ) {
      this.setState({
        answerTitle: "YOU NEED AN ANSWER!",
      });
    } else {
      this.setState({
        answerTitle: 'Answer',
      });
      return true;
    }
  }

  validateInput = () => {
    if (this.validateQuestion() & this.validateAnswer()) {
      let title = this.props.navigation.state.params.title;
      const resetAction = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home' }),
          NavigationActions.navigate({ routeName: 'Details', params: {title} })
        ]
      })
      this.props.addCardToDeck(title, this.state);
      this.setState({ question: '', answer: '', });
      this.props.navigation.dispatch(resetAction);
    };
  }

  buttonPress = () => {
    this.validateInput();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.centerContent} behavior='padding'>
        <FormInput
          containerStyles={styles.formContainer}
          text={this.state.questionTitle}
          placeholder='Why did the chicken cross the road?'
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          textStyles={[styles.smallTextStyles, {color: mainText}]}
          inputStyles={styles.inputStyles}
        />
        <FormInput
          containerStyles={styles.formContainer}
          text={this.state.answerTitle}
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

export default connect(null, { addCardToDeck })(AddCard);
