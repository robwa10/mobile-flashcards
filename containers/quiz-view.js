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
import FlipView from 'react-native-flip-view';
import QuizFront from '../components/quiz-front';
import QuizBack from '../components/quiz-back';

class QuizView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionView: true,
      currentCard: 0,
      correct: 0,
      isFlipped: false,
      frontOpacity: 1,
      backOpacity: 0,
    }
  };

  nextQuestion = () => {
    if (this.state.currentCard < this.props.deck.cards) {
      this.setState({ currentCard: this.state.currentCard++ });
      console.log('currentCard', this.state.currentCard);
      this.flipBack();
    } else {
      console.log('Route Home');
      this.props.navigation.navigate('Home');
    }
  };

  correctAnswer = () => {
    this.nextQuestion();
    this.setState({
      correct: this.state.correct++
    })
    console.log('Correct', this.state.correct);
  };

  flip = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      frontOpacity: 0,
      backOpacity: 1,
    });
  };

  flipBack = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      frontOpacity: 1,
      backOpacity: 0,
    });
  };

  renderFront = () => (
    <QuizFront
      frontOpacity={this.state.frontOpacity}
      correct={this.state.correct}
      cards={this.props.deck.cards}
      frontText={this.props.deck.questions[this.state.currentCard]['question']}
      onPress={this.flip}/>
  );

  renderBack = () => (
    <QuizBack
      backOpacity={this.state.backOpacity}
      backText={this.props.deck.questions[this.state.currentCard]['answer']}
      onCorrect={this.correctAnswer}
      onIncorrect={this.nextQuestion}/>
  );

  render() {
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

