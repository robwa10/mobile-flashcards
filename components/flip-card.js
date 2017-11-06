import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Easing,
  Animated } from 'react-native';
import FlipView from 'react-native-flip-view';

export default class FlipCard extends Component {
  constructor(props) {
    super(props);
    this.state= {
      isFlipped: false,
      frontOpacity: 1,
      backOpacity: 0,
     }
  }

  render = () => {
    return (
      <FlipView style={{flex: 1}}
                front={this._renderFront()}
                back={this._renderBack()}
                isFlipped={this.state.isFlipped}
                flipAxis="y"
                flipEasing={Easing.out(Easing.ease)}
                flipDuration={500}
                perspective={1000}/>
    );
  };

  _renderFront = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'space-around', alignItems: 'center', opacity: this.state.frontOpacity}}>
        <Text style={{fontSize: 16, marginTop: 10,}}>{this.props.correct}/{this.props.cards} Correct</Text>
        <Text style={{fontSize: 32, color: 'black'}}>{this.props.frontText}</Text>
        <TouchableOpacity style={{padding: 10, marginTop: 20,}} onPress={this.flip}>
          <Text style={{fontSize: 32, color: '#2196F3'}}>See Answer</Text>
        </TouchableOpacity>
      </View>
    );
  };

  _renderBack = () => {
    return (
      <View style={{flex: 1, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', opacity: this.state.backOpacity }}>
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{textAlign: 'center', fontSize: 32, color: 'black'}}>{this.props.backText}</Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity style={{backgroundColor: '#2196F3', borderRadius: 2, padding: 8, marginVertical: 8, }} onPress={this.correct}>
            <Text style={{fontSize: 32, color: '#FFF', textAlign: 'center'}}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding: 10, marginVertical: 10, }} onPress={this.inCorrect}>
            <Text style={{fontSize: 32, color: '#2196F3', textAlign: 'center'}}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  correct = () => {
    this.props.correctAnswer();
    this.flipBack();
  }

  inCorrect = () => {
    this.props.inCorrectAnswer();
    this.flipBack();
  }

  flip = () => {
    this.setState(
      {
        isFlipped: !this.state.isFlipped,
        frontOpacity: 0,
        backOpacity: 1,
      }
    );
  };

  flipBack = () => {
    this.setState(
      {
        isFlipped: !this.state.isFlipped,
        frontOpacity: 1,
        backOpacity: 0,
      }
    );
  };

}