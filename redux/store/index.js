import { createStore } from "redux";

const initialState = {
  nama: "",
  hobi: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
