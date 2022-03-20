import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/index';

export const Store = createStore(
  RootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
