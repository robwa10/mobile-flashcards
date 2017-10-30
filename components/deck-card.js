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
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    margin: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: '#212121',
    backgroundColor: '#FF8A65',
    padding: 10,
  }
});
