import {
  ADD_DECK,
  ADD_CARD,
  GET_DECK,
} from './action-constants';

export const addDeck = title => ({
  type: ADD_DECK,
  title,
})

export const addCardToDeck = (title, data) => ({
  type: ADD_CARD,
  title,
  data,
})

export const getDeck = id => ({
  type: GET_DECK,
  id
})
