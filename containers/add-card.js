import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';

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
        <Text>Question</Text>
        <TextInput
          style={{height: 40, backgroundColor: '#fff'}}
          placeholder='Why did the chicken cross the road?'
          value={this.state.question}
          onChangeText={(question) => this.setState({question})}
        />
        <Text>Answer</Text>
        <TextInput
          style={{height: 40, backgroundColor: '#fff'}}
          placeholder='To get to the other side.'
          value={this.state.answer}
          onChangeText={(answer) => this.setState({answer})}
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
