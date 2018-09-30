import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from './reducer';

export const initial = {
  player1: 0,
  player2: 0,
  serving: true,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);
