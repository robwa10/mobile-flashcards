import { data } from './data-reducer';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  data,
});

export default reducer;
