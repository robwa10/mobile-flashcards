import {
  ADD_DECK,
  ADD_CARD,
  LOAD_DATA,
  GET_DECK,
  DELETE_DECK,
  ANSWER,
  SCORE,
  RESET_QUIZ,
} from '../actions/action-constants';
import { mockState } from '../utils/mock-state-data';
import { omit } from 'lodash';

function addQuestion(state, title, data) {
  let myArray = state[title]['questions'];
  myArray.push(data)
  return {
    ...state,
    [title]: {
      ...state[title],
      questions: myArray,
    }
  }
}

export const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, [action.title]: { title: action.title, questions: [] }
      };
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
      return state;
  }
}

export const deck = (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return action.id
    case ADD_CARD:
      return {
        ...state,
        questions: [...state, data]
      }
    case ANSWER:
      return {
        ...state,
        currentCard: state['currentCard'] + 1,
        correct: state['correct'] + action.value,
      }
    case SCORE:
      return {
        ...state,
        correct: state['correct'] + action.value,
      }
    case RESET_QUIZ:
      return {
        ...state,
        currentCard: 0,
        correct: 0,
      }
    default:
      return state;
  }
}
