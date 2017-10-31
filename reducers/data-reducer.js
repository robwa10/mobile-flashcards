import {
  ADD_DECK,
  ADD_CARD,
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

const data = (state = mockState, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, [action.title]: { title: action.title, questions: [] }
      };
    case ADD_CARD:
      return addQuestion(state, action.title, action.data)
    default:
      return state;
  }
}

export default data;
