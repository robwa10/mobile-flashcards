import {
  ADD_DECK,
  ADD_CARD,
} from './action-constants';

export const addDeck = data => ({
  type: ADD_DECK,
  data,
})

export const addCardToDeck = (title, data) => ({
  type: ADD_CARD,
  title,
  data,
})
