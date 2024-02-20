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
// 异步action返回值必须是一个function
export const incrementAsyncAction = (data) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(incrementAction(data));
    }, 500);
  };
};
