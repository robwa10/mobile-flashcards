import {
  ADD_DECK,
  ADD_CARD,
} from '../actions/action-constants';
import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to add a deck', () => {
    const data = 'JavaScript';
    const expectedAction = {
      type: ADD_DECK,
      data,
    };
    expect(actions.addDeck(data)).toEqual(expectedAction)
  });
  it('should create an action to add card to a deck', () => {
    const title = 'JavaScript';
    const data = {
      question: 'Which operator is used to concat strings?',
      answer: '+',
    };
    const expectedAction = {
      type: ADD_CARD,
      title,
      data,
    };
    expect(actions.addCardToDeck(title, data)).toEqual(expectedAction)
  });
})
