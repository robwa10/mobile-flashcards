import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  Animated } from 'react-native';
import { connect } from 'react-redux';
import QuizCard from '../components/quiz-card';

class QuizView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionView: true,
      currentCard: 0,
      correct: 0,
    }
  }

  nextQuestion() {
    if (this.state.currentCard < this.props.deck.cards) {
      this.setState({ currentCard: currentCard++ })
    }
  }

  correct() {
    console.log('Correct');
  }

  incorrect() {
    console.log('Incorrect');
  }

  render() {
    let { cards, questions } = this.props.deck;
    let { correct, currentCard } = this.state;
    return (
      <QuizCard
        correct={correct}
        cards={cards}
        frontText={questions[currentCard]['question']}
        backText={questions[currentCard]['answer']}
      />
    )
  }
}

const mapStateToProps = ({ deck }) => ({
  deck,
});

export default connect(mapStateToProps)(QuizView)

const styles = StyleSheet.create({

});
