import React from 'react'
import {
  StyleSheet,
  View,
  Text } from 'react-native'
import {
  buttonContainer,
  mainTextStyles,
  smallTextStyles } from '../utils/styles'
import BlueButton from '../components/blue-button'
import TextButton from '../components/text-button'

const QuizCard = ({
  cardOpacity,
  topText,
  mainText,
  blueButtonPress,
  textButtonPress,
  blueButtonText,
  textButtonText
}) => (
  <View style={[styles.container, {opacity: cardOpacity}]}>
    <Text style={styles.smallTextStyles}>{topText}</Text>
    <Text style={styles.mainTextStyles}>{mainText}</Text>
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
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainer,
  smallTextStyles,
  mainTextStyles
})

export default QuizCard
