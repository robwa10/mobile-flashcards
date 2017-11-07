import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity } from 'react-native';
import { blue, mainText, secondaryText } from '../utils/colors';

export default QuizFront = ({ frontOpacity, topText, middleText, onPress, buttonText }) => (
  <View style={[styles.container, {opacity: frontOpacity}]}>
    <Text style={{fontSize: 16, marginTop: 10, color: secondaryText}}>{topText}</Text>
    <Text style={{fontSize: 32, color: mainText}}>{middleText}</Text>
    <TouchableOpacity style={{padding: 10, marginTop: 20,}} onPress={onPress}>
      <Text style={{fontSize: 32, color: blue}}>{buttonText}</Text>
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