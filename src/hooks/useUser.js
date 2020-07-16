import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { INITIALIZE } from "../store/modules/user";

export function useUser() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const token = useSelector((state) => state.user.token);

  const dispatch = useDispatch();

  const onInitialize = useCallback(() => dispatch({ type: INITIALIZE }), [
    dispatch,
  ]);

  return { isLoggedIn, token, onInitialize };
}
