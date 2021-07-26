import { combineReducers } from "redux";
import carReducer from "./car/carReducer";
import phoneReducer from "./phone/phoneReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
  car: carReducer,
  phone: phoneReducer,
  user: userReducer
});

export default rootReducer;
