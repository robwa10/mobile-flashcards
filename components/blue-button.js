import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { blue } from '../utils/styles';

export default BlueButton = ({ onPress, buttonText }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
      backgroundColor: blue,
      borderRadius: 2,
      padding: 8,
      marginVertical: 8
    },
  text: {
    fontSize: 32,
    color: '#FFF',
    textAlign: 'center',
  }
})
