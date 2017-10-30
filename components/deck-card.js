import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

export default DeckCard = (
    { title, onPress, touchableStyles, textStyles }) => {
    return (
      <TouchableHighlight
        onPress={onPress}
        style={touchableStyles}
        >
          <Text style={textStyles}>{title}</Text>
      </TouchableHighlight>
  )
};
