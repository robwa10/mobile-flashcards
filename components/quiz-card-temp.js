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
  Animated } from 'react-native';

export default class QuizCardTemp extends Component {
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
    this.frontOpacity = this.animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [1, 0]
    });
    this.backOpacity = this.animatedValue.interpolate({
        inputRange: [89, 90],
        outputRange: [0, 1]
    });
  }

  flipCard() {
    if (this.value >= 90) {
      Animated.spring(this.animatedValue,{
        toValue: 0,
        friction: 8,
        tension: 10
      }).start();
    } else {
      Animated.spring(this.animatedValue,{
        toValue: 180,
        friction: 8,
        tension: 10
      }).start();
    }
  }

  render() {
    const frontAnimatedStyle = {
      opacity: this.frontOpacity,
      transform: [
        { rotateY: this.frontInterpolate}
      ]
    }
    const backAnimatedStyle = {
      opacity: this.backOpacity,
      transform: [
        { rotateY: this.backInterpolate }
      ]
    }
    let { frontText, backText, correct, cards } = this.props;
    return (
      <View style={styles.container}>
         <View>
           <Animated.View style={[frontAnimatedStyle, styles.flipCard]}>
             <View>
               <Text style={{fontSize: 12, marginTop: 10,}}>{correct}/{cards} Correct</Text>
               <Text style={styles.flipText}>
                 This is the front text.
               </Text>
             </View>
           </Animated.View>
           <Animated.View style={[ backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
             <Text style={styles.flipText}>
               This is the back text.
             </Text>
           </Animated.View>
         </View>
         <TouchableOpacity onPress={() => this.flipCard()}>
           <Text style={{fontSize: 20, marginBottom: 10,}}>Answer</Text>
         </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  flipCardBack: {
    backgroundColor: '#FFF',
    position: "absolute",
    top: 0,
  },
  flipText: {
    textAlign: 'center',
    width: 275,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
