import React from 'react';
import { View, Text , TouchableHighlight } from 'react-native';

export default AnswerCard = ({ question, onPress, textStyles, buttonStyles }) => (
  <View>
    <Text style={textStyles}>{question}</Text>
    <TouchableHighlight style={buttonStyles} onPress={onPress}>
      <Text>question</Text>
    </TouchableHighlight>
  </View>
)
