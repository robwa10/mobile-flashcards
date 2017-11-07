import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Easing,
  Animated } from 'react-native';
import { connect } from 'react-redux';
import { correctAnswer, inCorrectAnswer } from '../actions';
import FlipView from 'react-native-flip-view';
import QuizCardFront from '../components/quiz-card-front';
import QuizCardBack from '../components/quiz-card-back';

class QuizView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      frontOpacity: 1,
      backOpacity: 0,
    }
  };

  _correct = () => {
    this.props.dispatch(correctAnswer())
  }

  _incorrect = () => {
    this.props.dispatch(inCorrectAnswer())
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.deck.currentCard !== this.props.deck.currentCard) {
      if (nextProp.deck.currentCard < this.props.deck.cards) {
        this.props.navigation.navigate('Home');
      }
      console.log('currentCard', this.props.deck.currentCard);
      console.log('nextProp', nextProp.deck.currentCard);
      if (this.state.isFlipped === true) {
        this.setState({
          isFlipped: !this.state.isFlipped,
          frontOpacity: 1,
          backOpacity: 0,
        })
      }
    }
  }

  flip = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      frontOpacity: 0,
      backOpacity: 1,
    });
  };

  renderFront = () => (
    <QuizCardFront
      frontOpacity={this.state.frontOpacity}
      correct={this.props.deck.correct}
      cards={this.props.deck.cards}
      frontText={this.props.deck.questions[this.props.deck.currentCard]['question']}
      onPress={this.flip}/>
  );

  renderBack = () => (
    <QuizCardBack
      backOpacity={this.state.backOpacity}
      backText={this.props.deck.questions[this.props.deck.currentCard]['answer']}
      onCorrect={this._correct}
      onIncorrect={this._incorrect}/>
  );

  render() {
    console.log('I rendered');
    console.log('Score on render', this.props.deck.correct);
    console.log('Card on render', this.props.deck.currentCard);
    console.log('BREAK');
    return (
      <FlipView
        style={{flex: 1}}
        front={this.renderFront()}
        back={this.renderBack()}
        isFlipped={this.state.isFlipped}
        flipAxis="y"
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000}/>
    )
  };
};

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(QuizView)

