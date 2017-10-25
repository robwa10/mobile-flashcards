import data from './data-reducer';
import deck from './deck-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  data,
  deck,
});

export default reducer;
