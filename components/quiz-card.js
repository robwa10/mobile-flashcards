import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity, } from 'react-native';
import { blue, mainText, secondaryText, } from '../utils/styles';
import BlueButton from '../components/blue-button';
import TextButton from '../components/text-button';

export default QuizCard = ({
  cardOpacity,
  topText,
  mainText,
  blueButtonPress,
  textButtonPress,
  blueButtonText,
  textButtonText,
}) => (
  <View style={[styles.container, {opacity: cardOpacity}]}>
    <Text style={styles.smallText}>{topText}</Text>
    <Text style={styles.mainText}>{mainText}</Text>
    <View style={styles.buttonContainer}>
      { blueButtonPress
        ? <BlueButton
          onPress={blueButtonPress}
          buttonText={blueButtonText} />
        : null
      }
      { textButtonPress
        ? <TextButton
          onPress={textButtonPress}
          buttonText={textButtonText} />
        : null
      }
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    justifyContent: 'center'
  },
  smallText: {
    fontSize: 16,
    marginTop: 10,
    color: secondaryText
  },
  mainText: {
    textAlign: 'center',
    fontSize: 32,
    color: mainText
  },
});
