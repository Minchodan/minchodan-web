export const INITIALIZE = "signUp/INITIALIZE";
export const SET_STATE = "signUp/SET_STATE";

const initialState = {
  id: "",
  password: "",
  name: "",
};

export default function signUp(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...initialState,
      };
    case SET_STATE:
      return {
        ...state,
        [action.key]: [action.value],
      };
    default:
      return state;
  }
}
