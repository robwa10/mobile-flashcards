import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';

const data = (state = {}, action) => {
  const actionTitle = action.title;
  const actionData = [action.data]
  switch (action.type) {
    case ADD_DECK:
      return {
        ...state, [actionTitle]: { title: actionTitle, questions: [] }
      };
    case ADD_CARD:
      console.log(state)
    default:
      return state;
  }
}

export default data;