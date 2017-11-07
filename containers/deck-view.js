import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import { blue, mainText, secondaryText } from '../utils/colors';

class DeckView extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 36, color: mainText}}>{this.props.deck.key}</Text>
          <Text style={{fontSize: 20, marginTop: 10, color: secondaryText}}>{this.props.deck.cards} cards</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{backgroundColor: blue, borderRadius: 2, padding: 8, marginVertical: 8, }}
            onPress={() => this.props.navigation.navigate('NewCard')}>
              <Text style={{fontSize: 32, color: '#FFF', textAlign: 'center'}}>Add Card</Text>
          </TouchableOpacity>
          {this.props.deck.cards === 0
            ? null
            : <TouchableOpacity
            style={{padding: 10, marginVertical: 10, }}
            onPress={() => this.props.navigation.navigate('Quiz')}>
              <Text style={{fontSize: 32, color: blue, textAlign: 'center'}}>Start Quiz</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(DeckView);
