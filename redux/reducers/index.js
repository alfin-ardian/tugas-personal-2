// reducers/index.js
import { combineReducers } from "redux";

const initialState = {
  // Define your initial state here
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({
  app: rootReducer,
});
