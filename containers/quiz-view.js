import React, { Component } from 'react'
import {
  View,
  Text,
  Easing } from 'react-native'
import { connect } from 'react-redux'
import { centerContent } from '../utils/styles'
import FlipView from 'react-native-flip-view'
import QuizCard from '../components/quiz-card'

class QuizView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewResult: false,
      isFlipped: false,
      frontOpacity: 1,
      backOpacity: 0,
      currentCard: 0,
      cards: 0,
      correct: 0,
      questions: []
    }
  };

  setData () {
    let title = this.props.navigation.state.params.title
    let cards = this.props.data[title]['questions'].length
    this.setState({
      cards,
      questions: this.props.data[title]['questions']
    })
  }

  componentDidMount () {
    this.setData()
  }

  nextCard (value) {
    let totalCards = (this.state.cards - 1)
    let currentCard = this.state.currentCard
    if (currentCard < totalCards) {
      // Add 1 to currentCard and add value to correct
      this.setState({
        currentCard: this.state.currentCard + 1,
        correct: this.state.correct + value
      })
    } else {
      // Add value to correct and show result
      this.setState({
        correct: this.state.correct + value,
        viewResult: !this.state.viewResult
      })
    }
    this.flipBack()
  }

  tryAgain () {
    // Reset currentCard and correct to 0, reset result state
    this.setState({
      viewResult: !this.state.viewResult,
      currentCard: 0,
      correct: 0
    })
  }

  // Future improvement - change opacity when rotation at 90
  flip () {
    this.setState({
      isFlipped: !this.state.isFlipped,
      frontOpacity: 0,
      backOpacity: 1
    })
  }

  flipBack () {
    this.setState({
      isFlipped: !this.state.isFlipped,
      frontOpacity: 1,
      backOpacity: 0
    })
  }

  cardsLeft () {
    let count = this.state.cards - (this.state.currentCard + 1)
    if (count === 1) {
      return `${count} card left`
    } else {
      return `${count} cards left`
    }
  }

  finalScore () {
    const score = Math.floor((this.state.correct / this.state.cards) * 100)
    return (
      <QuizCard
        cardOpacity={this.state.frontOpacity}
        topText={score > 70 ? 'Congratulations' : 'Study More'}
        mainText={`You got ${score}% correct.`}
        blueButtonPress={this.tryAgain}
        blueButtonText='Retake Quiz'
        textButtonPress={() => this.props.navigation.goBack()}
        textButtonText='Deck'
      />
    )
  };

  renderFront () {
    return (
      <QuizCard
        cardOpacity={this.state.frontOpacity}
        topText={`${this.state.correct}/${this.state.cards} Correct`}
        mainText={this.state.questions[this.state.currentCard]['question']}
        blueButtonPress={this.flip}
        blueButtonText='See Answer' />
    )
  }

  renderBack () {
    return (
      <QuizCard
        cardOpacity={this.state.backOpacity}
        topText={this.cardsLeft()}
        mainText={this.state.questions[this.state.currentCard]['answer']}
        blueButtonPress={() => this.nextCard(1)}
        blueButtonText='Correct'
        textButtonPress={() => this.nextCard(0)}
        textButtonText='Incorrect'
      />
    )
  }

  render () {
    if (this.state.questions.length === 0) {
      return (
        <View style={centerContent}>
          <Text>Are you ready for this?</Text>
        </View>
      )
    }
    return (
      <FlipView
        style={centerContent}
        front={
          this.state.viewResult
          ? this.finalScore()
          : this.renderFront()}
        back={this.renderBack()}
        isFlipped={this.state.isFlipped}
        flipAxis='y'
        flipEasing={Easing.out(Easing.ease)}
        flipDuration={500}
        perspective={1000} />
    )
  };
};

const mapStateToProps = ({ data }) => ({
  data
})

export default connect(mapStateToProps)(QuizView)
