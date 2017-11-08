import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { blue } from '../utils/colors';

export default TextButton = ({ onPress, buttonText }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
      <Text style={styles.text}>{buttonText}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
      padding: 10,
      marginVertical: 10,
    },
  text: {
    fontSize: 32,
    color: blue,
    textAlign: 'center',
  }
})
