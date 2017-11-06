import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native';

export default QuizFront = ({ frontOpacity, correct, cards, frontText, onPress }) => (
  <View style={[styles.container, {opacity: frontOpacity}]}>
    <Text style={{fontSize: 16, marginTop: 10,}}>{correct}/{cards} Correct</Text>
    <Text style={{fontSize: 32, color: 'black'}}>{frontText}</Text>
    <TouchableOpacity style={{padding: 10, marginTop: 20,}} onPress={onPress}>
      <Text style={{fontSize: 32, color: '#2196F3'}}>See Answer</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});