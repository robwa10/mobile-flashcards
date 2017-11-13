import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { blue, fontLarge } from '../utils/styles'

const TextButton = ({ onPress, buttonText }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={onPress}>
    <Text style={styles.text}>{buttonText}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    width: 200,
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10
  },
  text: {
    fontSize: fontLarge,
    color: blue,
    textAlign: 'center'
  }
})

export default TextButton
