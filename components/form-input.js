import React from 'react'
import { View, Text, TextInput } from 'react-native'

const FormInput = ({
  containerStyles,
  text,
  textStyles,
  inputStyles,
  placeholder,
  value,
  onChangeText
}) => (
  <View style={containerStyles}>
    <Text style={textStyles}>{text}</Text>
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText} />
  </View>
)

export default FormInput
