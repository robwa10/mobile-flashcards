import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, } from 'react-native';
import { blue, mainText, secondaryText, } from '../utils/styles';
import BlueButton from '../components/blue-button';

export default QuizFront = ({ frontOpacity, topText, middleText, onPress, buttonText }) => (
  <View style={[styles.container, {opacity: frontOpacity}]}>
    <Text style={styles.scoreText}>{topText}</Text>
    <Text style={styles.questionText}>{middleText}</Text>
    <BlueButton
      onPress={onPress}
      buttonText={buttonText}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 16,
    marginTop: 10,
    color: secondaryText
  },
  questionText: {
    fontSize: 32,
    color: mainText,
    textAlign: 'center'
  },
});
