import { actionTypes } from "./constant";
/**
 *
 * @param {*} preState 之前的状态
 * @param {*} action  动作对象
 */
export default function countReducer(preState, action) {
  const { type, data } = action;
  switch (type) {
    case actionTypes.INCREMENT:
      return preState + data;

    case actionTypes.DECREMENT:
      return preState - data;

    default:
      return 0; // 初始化
  }
}

// 纯函数
