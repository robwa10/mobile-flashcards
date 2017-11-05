import React from 'react';
import {View, Text, TextInput } from 'react-native';

export default FormInput = ({
  text,
  textStyles,
  inputStyles,
  placeholder,
  value,
  onChangeText, }) => (
  <View>
    <Text style={textStyles}>{text}</Text>
    <TextInput
      style={inputStyles}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
  </View>
)
