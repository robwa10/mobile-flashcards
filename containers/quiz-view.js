import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
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
    let totalCards = (this.props.cards - 1);
    let currentCard = this.props.currentCard;
    if (currentCard < totalCards) {
      this.props.dispatch(answer(value)); // Adds 1 to currentCard and adds value to correct
    } else {
      this.setState({viewResult: !this.state.viewResult})
      this.props.dispatch(score(value)) // Adds value to correct
    }
    this.flipBack();
  }

  tryAgain = () => {
    this.props.dispatch(resetQuiz()) // resets currentCard and correct to 0
    this.setState({viewResult: !this.state.viewResult})
  }

  // Future improvement - change opacity when rotation at 90
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

  cardsLeft = () => {
    let count = this.props.cards - (this.props.currentCard + 1);
    if (count == 1) {
      return `${count} card left`
    } else {
      return `${count} cards left`
    }
  }

  finalScore = () => {
    const score = Math.floor((this.props.correct/this.props.cards) * 100);
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
      topText={`${this.props.correct}/${this.props.cards} Correct`}
      middleText={this.props.questions[this.props.currentCard]['question']}
      onPress={this.flip}
      buttonText='See Answer'/>
    );

  renderBack = () => (
    <QuizCardBack
      backOpacity={this.state.backOpacity}
      topText={this.cardsLeft()}
      backText={this.props.questions[this.props.currentCard]['answer']}
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
  cards: deck.cards,
  correct: deck.correct,
  currentCard: deck.currentCard,
  questions: deck.questions,
});

export default connect(mapStateToProps)(QuizView)
