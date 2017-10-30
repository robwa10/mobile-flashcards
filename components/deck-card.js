import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function DeckCard({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginHorizontal: 5,
    marginVertical: 2,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#212121',
    backgroundColor: '#FF8A65',
    paddingVertical: 20,
    marginVertical: 2,
    borderRadius: 10,
  }
});
