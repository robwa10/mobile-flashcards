import {
  ADD_DECK,
  ADD_CARD,
  GET_DECK,
  LOAD_DATA,
  DELETE_DECK,
  ANSWER,
  SCORE,
  RESET_QUIZ
} from './action-constants'

export const addDeck = title => ({
  type: ADD_DECK,
  title
})

export const addCardToDeck = (title, data) => ({
  type: ADD_CARD,
  title,
  data
})

export const getDeck = id => ({
  type: GET_DECK,
  id
})

export const loadData = (response) => ({
  type: LOAD_DATA,
  response
})

export const deleteDeck = (key) => ({
  type: DELETE_DECK
})

export const answer = (value) => ({
  type: ANSWER,
  value
})

export const score = (value) => ({
  type: SCORE,
  value
})

export const resetQuiz = () => ({
  type: RESET_QUIZ
})
