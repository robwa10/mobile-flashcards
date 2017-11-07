import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../actions';
import FormInput from '../components/form-input';
import { blue, mainText } from '../utils/colors';

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
      <View style={styles.container}>
        <FormInput
          containerStyles={{marginBottom: 20}}
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
        <TouchableOpacity
          style={{padding: 10, marginVertical: 10, }}
          onPress={() => this.buttonPress()}>
          <Text style={{fontSize: 32, color: blue, textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
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
