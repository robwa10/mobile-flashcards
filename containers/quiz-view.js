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
import { answer, score, resetQuiz } from '../actions';
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
      viewResult: false,
    }
  };
  
  nextCard = (value) => {
    let totalCards = (this.props.deck.cards - 1);
    let currentCard = this.props.deck.currentCard;
    if (currentCard < totalCards) {
      this.props.dispatch(answer(value)); // Adds 1 to currentCard and value to correct
    } else {
      //
      this.setState({viewResult: !this.state.viewResult})
      this.props.dispatch(score(value)) // Adds value to correct
    }
    this.flipBack();
  }

  tryAgain = () => {
    this.props.dispatch(resetQuiz()) // resets currentCard and correct to 0
    this.setState({viewResult: !this.state.viewResult})
  }

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
    })
  }

  finalScore = () => {
    const score = (this.props.deck.correct/this.props.deck.cards) * 100;
    return (
      <QuizCardFront
        frontOpacity={this.state.frontOpacity}
        topText={score > 70 ? 'Congratulations' : 'Study More'}
        middleText={`You got ${score}% correct.`}
        onPress={this.tryAgain}
        buttonText='Retake Quiz'/>
    )
  };

  renderFront = () => (
    <QuizCardFront
      frontOpacity={this.state.frontOpacity}
      topText={`${this.props.deck.correct}/${this.props.deck.cards} Correct`}
      middleText={this.props.deck.questions[this.props.deck.currentCard]['question']}
      onPress={this.flip}
      buttonText='See Answer'/>
    );

  renderBack = () => (
    <QuizCardBack
      backOpacity={this.state.backOpacity}
      backText={this.props.deck.questions[this.props.deck.currentCard]['answer']}
      onCorrect={() => this.nextCard(1)}
      onIncorrect={() => this.nextCard(0)}/>
  );

  render() {
    return (
      <FlipView
        style={{flex: 1}}
        front={
          this.state.viewResult
          ? this.finalScore()
          : this.renderFront()}
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

