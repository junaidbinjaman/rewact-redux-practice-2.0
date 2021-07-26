import { BUY_PHONE } from "./phoneType";

const initialState = {
  numOfPhone: 20,
};

const phoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PHONE:
      return {
        ...state,
        numOfPhone: state.numOfPhone - action.payload,
      };
    default:
      return state;
  }
};

export default phoneReducer;
