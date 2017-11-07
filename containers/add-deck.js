import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../actions';
import FormInput from '../components/form-input';
import { blue, mainText } from '../utils/colors';

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
      <View style={styles.container}>
        <FormInput
          containerStyles={{marginBottom: 10}}
          text="What's you new deck's title?"
          placeholder='Deck Title'
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          textStyles={{fontSize: 20, marginBottom: 20, alignSelf: 'center'}}
          inputStyles={{fontSize: 20, height: 50, backgroundColor: '#fff'}}
        />
        <TouchableOpacity style={{padding: 10, marginVertical: 10, }} onPress={() => this.buttonPress()}>
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
});

export default connect()(AddDeck);
