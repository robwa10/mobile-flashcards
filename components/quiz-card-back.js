import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, } from 'react-native';
import { blue, mainText, secondaryText, } from '../utils/styles';
import BlueButton from '../components/blue-button';
import TextButton from '../components/text-button';

export default QuizBack = ({ backOpacity, topText, backText, onCorrect, onIncorrect }) => (
  <View style={[styles.container, {opacity: backOpacity}]}>
    <Text style={styles.scoreText}>{topText}</Text>
    <Text style={styles.text}>{backText}</Text>
    <View style={{justifyContent: 'center'}}>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText: {
    fontSize: 16,
    marginTop: 10,
    color: secondaryText
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: mainText
  },
});
