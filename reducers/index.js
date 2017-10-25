import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, action.title: { title: action.title, questions: [] }
      };
    case ADD_CARD:
      return {
        ...state, action.title: {
          questions: [...state.questions, action.data]
        }
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  data
});

export default reducer;