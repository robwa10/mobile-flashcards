import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import { connect } from 'react-redux';
import { blue, mainText, secondaryText, white} from '../utils/styles';
import { AppLoading } from 'expo';
import BlueButton from '../components/blue-button';
import TextButton from '../components/text-button';

class DeckView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      cards: 0,
    }
  }

  setData = () => {
    let title = this.props.navigation.state.params.title;
    if (this.props.data.hasOwnProperty(title)) {
      let cards = this.props.data[title]['questions'].length
      this.setState({ title, cards})
    }
    this.setState({ title })
  }

  componentDidMount() {
    this.setData()
  }

  errorMessage = () => (
    <View style={styles.container}>
      <Text style={styles.cardText}>
        I'm sure I put that deck somewhere...
      </Text>
    </View>
  )

  renderDeckCard = () => {
    let { title, cards } = this.state;
    return(
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.cardText}>
            {cards} {cards == 1 ? 'card' : 'cards'}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <BlueButton
            onPress={() => this.props.navigation.navigate('NewCard', {title})}
            buttonText='Add Card'
          />
          {cards === 0
            ? null
            : <TextButton
                onPress={() => this.props.navigation.navigate('Quiz', {title})}
                buttonText='Start Quiz'
              />
          }
        </View>
      </View>
    )
  }

  render() {
    if (this.state.title === '') {
      return (this.errorMessage())
    }
    return (this.renderDeckCard())
  }
}

mapStateToProps = ({ data }) => ({
  data
})

export default connect(mapStateToProps)(DeckView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    color: mainText,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 20,
    marginTop: 10,
    color: secondaryText,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
});
