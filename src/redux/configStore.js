import { createStore, combineReducers, applyMiddleware } from 'redux';
import greetingReducer from './greeting/greeting';
import thunk from 'redux-thunk'

const reducer = combineReducers({
  greetingReducer
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;