// This great video tutorial here was invaluable.
// https://codedaily.io/screencasts/12/Create-a-Flip-Card-Animation-with-React-Native
// Lord knows the Udacity course wasn't helpful.
// It just showed me how to make a dog picture fade in...

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Animated } from 'react-native';

export default class QuizCard extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
    this.value = 0;
    this.animatedValue.addListener(({ value }) => {
      this.value = value;
    })
    this.frontInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    })
    this.backInterpolate = this.animatedValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg']
    })
  }
  flipCard() {
    Animated.spring(this.animatedValue,{
      toValue: 180,
      friction: 8,
      tension: 10
    }).start();
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    let { frontText, backText, correct, cards } = this.props;
    return (
      <View style={styles.container}>
         <View>
           <Animated.View style={[styles.shadow, styles.flipCard, frontAnimatedStyle]}>
             <Text style={{fontSize: 12, marginTop: 10,}}>{correct}/{cards} Correct</Text>
             <Text style={styles.flipText}>
               {frontText}
             </Text>
             <TouchableOpacity onPress={() => this.flipCard()}>
               <Text style={{fontSize: 20, marginBottom: 10,}}>Answer</Text>
             </TouchableOpacity>
           </Animated.View>
           <Animated.View style={[styles.shadow, backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
             <Text style={styles.flipText}>
               {backText}
             </Text>
           </Animated.View>
         </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'space-between',
    backfaceVisibility: 'hidden',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  flipCardBack: {
    position: "absolute",
    top: 0,
    backgroundColor: '#FFF',
  },
  flipText: {
    textAlign: 'center',
    width: 275,
    fontSize: 30,
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  }
});
