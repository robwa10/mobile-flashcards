import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native';
import { blue, mainText } from '../utils/colors';

export default QuizBack = ({ backOpacity, backText, onCorrect, onIncorrect }) => (
  <View style={[styles.container, {opacity: backOpacity}]}>
    <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 32, color: mainText}}>{backText}</Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity style={{backgroundColor: blue, borderRadius: 2, padding: 8, marginVertical: 8, }} onPress={onCorrect}>
        <Text style={{fontSize: 32, color: '#FFF', textAlign: 'center'}}>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding: 10, marginVertical: 10, }} onPress={onIncorrect}>
        <Text style={{fontSize: 32, color: blue, textAlign: 'center'}}>Incorrect</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});