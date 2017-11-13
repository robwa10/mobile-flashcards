import {
  ADD_DECK,
  ADD_CARD,
  GET_DECK
} from '../actions/action-constants'
import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to add a deck', () => {
    const title = 'JavaScript'
    const expectedAction = {
      type: ADD_DECK,
      title
    }
    expect(actions.addDeck(title)).toEqual(expectedAction)
  })
  it('should create an action to add card to a deck', () => {
    const title = 'JavaScript'
    const data = {
      question: 'Which operator is used to concat strings?',
      answer: '+'
    }
    const expectedAction = {
      type: ADD_CARD,
      title,
      data
    }
    expect(actions.addCardToDeck(title, data)).toEqual(expectedAction)
  })
  it('should create an action to return a deck', () => {
    const id = 'JavaScript'
    const expectedAction = {
      type: GET_DECK,
      id
    }
    expect(actions.getDeck(id)).toEqual(expectedAction)
  })
})
