import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, } from 'react-native';
import { blue, mainText, } from '../utils/colors';
import BlueButton from '../components/blue-button';
import TextButton from '../components/text-button';

export default QuizBack = ({ backOpacity, backText, onCorrect, onIncorrect }) => (
  <View style={[styles.container, {opacity: backOpacity}]}>
    <View style={styles.titleContainer}>
      <Text style={styles.text}>{backText}</Text>
    </View>
    <View style={{flex: 1, justifyContent: 'center'}}>
      <BlueButton
        onPress={onCorrect}
        buttonText='Correct'
      />
      <TextButton
        onPress={onIncorrect}
        buttonText='Incorrect'
      />
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
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: mainText
  },
});
