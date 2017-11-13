import {
  ADD_DECK,
  ADD_CARD,
  LOAD_DATA,
  DELETE_DECK } from '../actions/action-constants'
import { omit } from 'lodash'

function addQuestion (state, title, data) {
  let myArray = state[title]['questions']
  myArray.push(data)
  return {
    ...state,
    [title]: {
      ...state[title],
      questions: myArray
    }
  }
}

export const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, [action.title]: { title: action.title, questions: [] }
      }
    case ADD_CARD:
      return addQuestion(state, action.title, action.data)
    case LOAD_DATA:
      return action.response.data
    case DELETE_DECK:
      return {
        ...state,
        [action.key]: omit(state[action.key])
      }
    default:
      return state
  }
}
