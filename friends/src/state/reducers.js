import * as types from "./actionTypes";

// const initialState = {
//   fetchingFriends: false,
//   friends: [],
//   loggingIn: false,
//   savingFriends: false
//   // updatingFriend: false,
//   // error: null,
// };

export function friendsReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return action.payload;

    default:
      return state;
  }
}
