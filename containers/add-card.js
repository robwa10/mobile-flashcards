import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import FormInput from '../components/form-input';

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
    }
  }

  buttonPress = () => {
    this.setState({ question: '', answer: '', });
    this.props.dispatch(addCardToDeck(this.props.deck.key, this.state));
}

  render() {
    return (
      <View style={{padding: 10}}>
        <FormInput
          text='Question'
          placeholder='Why did the chicken cross the road?'
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
          textStyles={{fontSize: 20}}
          inputStyles={{height: 50, backgroundColor: '#fff'}}
        />
        <FormInput
          text='Answer'
          placeholder='To get to the other side.'
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
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

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(AddCard);
