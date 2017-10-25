import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';
import {
  mockState,
  mockNewDeckState,
  mockNewQuestionState,
  mockQuestion,
  mockDeck,
} from '../utils/mock-state-data';
import data from '../reducers/data-reducer';
import deck from '../reducers/deck-reducer';

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(data(undefined, {})
  ).toEqual({})
  })
  it('should add new deck with title', () => {
    expect(data({}, {
      type: ADD_DECK,
      title: 'JavaScript'
    })
  ).toEqual(mockNewDeckState)
  })
  it('should add a new question and answer to a deck', () => {
    expect(data(mockNewQuestionState, {
      type: ADD_CARD,
      title: 'JavaScript',
      data: mockQuestion,
    })
  ).toEqual(mockState)
  })
})
