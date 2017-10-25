import {
  ADD_DECK,
} from '../actions/action-constants';
import * as actions from '../actions';

describe('actions', () => {
  it('should create an action to add a deck', () => {
    const data = 'JavaScript';
    const expectedAction = {
      type: 'ADD_DECK',
      data,
    };
    expect(actions.addDeck(data)).toEqual(expectedAction)
  })
})
