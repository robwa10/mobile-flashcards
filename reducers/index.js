import { data, deck } from './data-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  data,
  deck,
});

export default reducer;
