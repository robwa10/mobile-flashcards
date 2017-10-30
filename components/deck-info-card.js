import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default DeckInfoCard = (
    { title, cards, onPress, parentStyles, textStyles }) => {
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={parentStyles}>
          <Text style={textStyles}>{title}</Text>
          <Text style={textStyles}>{`Decks: ${cards}`}</Text>
        </View>
      </TouchableHighlight>
  )
};
