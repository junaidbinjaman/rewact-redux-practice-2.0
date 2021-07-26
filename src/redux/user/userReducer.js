import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './userType'

const initialState = {
  loading: false,
  user: [],
  error: ''
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: ''
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        user: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default userReducer