import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';
import data from '../reducers/data-reducer';

const mockState = {
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

const mockNewDeckState = {
  JavaScript: {
    title: 'JavaScript',
    questions: []
    }
  }

const mockQuestions = {
  question: 'What is a closure?',
  answer: 'The combination of a function and the lexical environment within which that function was declared.'
}

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
    expect(data(mockNewDeckState, {
      type: ADD_CARD,
      title: 'JavaScript',
      data: {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      },
    })
  ).toEqual(mockState)
  })
})