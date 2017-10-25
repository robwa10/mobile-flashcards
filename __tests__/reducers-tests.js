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
        question: 'Question 1?',
        answer: 'Answer 1'
      },
      {
        question: 'Question 2?',
        answer: 'Answer 2'
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

const mockNewQuestionState = {
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'Question 1?',
        answer: 'Answer 1'
      }
    ]
    }
}

const mockQuestion = {
  question: 'Question 2?',
  answer: 'Answer 2'
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
    expect(data(mockNewQuestionState, {
      type: ADD_CARD,
      title: 'JavaScript',
      data: mockQuestion,
    })
  ).toEqual(mockState)
  })
})