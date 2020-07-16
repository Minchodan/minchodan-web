import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { INITIALIZE, SET_STATE } from "../store/modules/signUp";

export function useSignUp() {
  const id = useSelector((state) => state.signUp.id);
  const password = useSelector((state) => state.signUp.password);
  const name = useSelector((state) => state.signUp.name);

  const dispatch = useDispatch();

  const onInitialize = useCallback(() => dispatch({ type: INITIALIZE }), [
    dispatch,
  ]);
  const onSetState = useCallback(
    ({ key, value }) => dispatch({ type: SET_STATE, key, value }),
    [dispatch]
  );

  return { id, password, name, onInitialize, onSetState };
}
