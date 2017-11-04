import {
  ADD_DECK,
  ADD_CARD,
  LOAD_DATA,
  GET_DECK,
} from '../actions/action-constants';
import { mockState } from '../utils/mock-state-data';

function addQuestion(state, title, data) {
  return {
    ...state,
      [title]: {
        ...state[title],
          questions: [...state[title].questions, data]
    }
  }
}

export const data = (state = mockState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, [action.title]: { title: action.title, questions: [] }
      };
    case ADD_CARD:
      return addQuestion(state, action.title, action.data)
    case LOAD_DATA:
      return action.response.data
    default:
      return state;
  }
}

export const deck = (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return action.id
    default:
      return state;
  }
}
