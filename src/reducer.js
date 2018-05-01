import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { drizzleReducers } from 'drizzle';
import { voteReducer } from './vote/reducer';

const reducer = combineReducers({
  routing: routerReducer,
  ...drizzleReducers,
})

export default reducer
