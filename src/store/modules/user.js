export const INITIALIZE = "user/INITIALIZE";

const initialState = {
  isLoggedIn: false,
  token: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
