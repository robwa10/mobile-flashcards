import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';
import { combineReducers } from 'redux';

const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_DECK:
      return {};
    case ADD_CARD:
      return {};
    default:
      return state;
  }
}

const reducer = combineReducers({
  data
});

export default reducer;