/**
 * count的action creater
 */
import { actionTypes } from "./constant";
export const incrementAction = (data) => ({
  type: actionTypes.INCREMENT,
  data,
});
export const decrementAction = (data) => ({
  type: actionTypes.DECREMENT,
  data,
});
