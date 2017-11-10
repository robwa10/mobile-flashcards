import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { addCardToDeck } from '../actions';
import FormInput from '../components/form-input';
import { blue, mainText, } from '../utils/styles';
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
    const navigateAction = NavigationActions.navigate({
      routeName: 'Details',
      params: {title},
      action: NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'}),
          NavigationActions.navigate({ routeName: 'Details'})
        ]
      })
    })

    this.props.dispatch(addCardToDeck(title, this.state));
    this.setState({ question: '', answer: '', });
    this.props.navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <FormInput
          containerStyles={{marginBottom: 10}}
          text='Question'
          placeholder='Why did the chicken cross the road?'
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          textStyles={styles.text}
          inputStyles={styles.input}
        />
        <FormInput
          containerStyles={{marginBottom: 10}}
          text='Answer'
          placeholder='To get to the other side.'
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
          textStyles={styles.text}
          inputStyles={styles.input}
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
  text: {
    fontSize: 20,
    marginBottom: 2,
  },
  input: {
    fontSize: 20,
    height: 50,
  }
});

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(AddCard);
