import {
  GET_DECK,
} from '../actions/action-constants';

const deck = (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state[action.id]
      }
    default:
      return state;
  }
}

export default deck;
