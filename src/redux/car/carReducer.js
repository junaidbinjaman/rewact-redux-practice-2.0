import { BUY_CAR } from "./carType";

const initialState = {
  numOfCar: 30
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return {
        ...state,
        numOfCar: state.numOfCar - 1
      }

    default:
      return state
  }
}

export default carReducer