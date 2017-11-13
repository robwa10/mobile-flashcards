import { TabNavigator, StackNavigator } from 'react-navigation'
import DecksList from '../containers/decks-list'
import DeckView from '../containers/deck-view'
import AddDeck from '../containers/add-deck'
import AddCard from '../containers/add-card'
import QuizView from '../containers/quiz-view'

const HomeNavigator = TabNavigator({
  Home: {
    screen: DecksList,
    navigationOptions: {
      headerTitle: 'Home'
    }
  },
  New: {
    screen: AddDeck,
    navigationOptions: {
      headerTitle: 'New Deck'
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: HomeNavigator
  },
  Details: {
    screen: DeckView,
    navigationOptions: {
      headerTitle: 'Details'
    }
  },
  NewCard: {
    screen: AddCard,
    navigationOptions: {
      headerTitle: 'New Card'
    }
  },
  Quiz: {
    screen: QuizView,
    navigationOptions: {
      headerTitle: 'Quiz',
      headerBackTitle: null
    }
  }
})

export default MainNavigator
