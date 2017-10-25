import {
  ADD_DECK,
  ADD_CARD,
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
