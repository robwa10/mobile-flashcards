import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default DeckInfoCard = (
    { title,
      cards,
      onPress,
      containerStyles,
      titleStyles,
      textStyles }) => {
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={containerStyles}>
          <Text style={titleStyles}>{title}</Text>
          <Text style={textStyles}>{cards} {cards == 1 ? 'card' : 'cards'}</Text>
        </View>
      </TouchableHighlight>
  )
};
