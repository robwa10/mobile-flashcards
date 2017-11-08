import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { blue, mainText, secondaryText, } from '../utils/colors';
import BlueButton from '../components/blue-button';
import TextButton from '../components/text-button';

export default DeckView = (props) => {
  let item = props.navigation.state.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.key}</Text>
        <Text style={styles.cardText}>
          {item.cards} {item.cards == 1 ? 'card' : 'cards'}
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <BlueButton
          onPress={() => props.navigation.navigate('NewCard')}
          buttonText='Add Card'
        />
        {item.cards === 0
          ? null
          : <TextButton
              onPress={() => props.navigation.navigate('Quiz')}
              buttonText='Start Quiz'
            />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: mainText
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
    color: secondaryText
  },
});
