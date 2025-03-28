import * as C from '../constants';

// initial states
export const initialState = {
  'users': [],
};

// reducers
export function userReducer(state, action) {
  debugger
  switch (action.type) {
    case C.actionTitle.SELECTED_USERS:
      return { ...state, ...action.value};
    default:
      return state;
  }
}