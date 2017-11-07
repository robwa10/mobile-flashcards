import {
  GET_DECK,
  CHANGE_SCORE,
  NEXT_CARD,
} from '../actions/action-constants';

const deck = (state = {}, action) => {
  switch (action.type) {
    case GET_DECK:
      return {
        ...state[action.id]
      }
    case CORRECT:
      console.log('CHANGE_SCORE');
      return { ...state, correct: state['correct'] + 1}
    case NEXT_CARD:
      console.log('NEXT_CARD');
      return { ...state, currentCard: state['currentCard'] + 1}
    default:
      return state;
  }
}

export default deck;
